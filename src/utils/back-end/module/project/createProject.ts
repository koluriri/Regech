import prisma from 'utils/back-end/prisma';
import zodErrorToString from 'utils/zodErrorToString';
import getUserIdByUid from 'utils/back-end/module/user/getUserIdByUid';
import { UserStatus } from '@prisma/client';
import { RequiredBodySchema } from './createProject.schema';
import generateAutoKeyvisual from '../visual/generateAutoKeyvisual';

type ConnectUser = {
  user: {
    connect: {
      id: number;
    };
  };
  role?: string;
  subRole?: string;
  status: UserStatus;
};

const createProject = async (uid: string, body: unknown) => {
  const parsedBody = RequiredBodySchema.safeParse(body);
  if (!parsedBody.success) throw Error(zodErrorToString(parsedBody.error));

  if (parsedBody.data.domain === '') parsedBody.data.domain = undefined;

  const userId = await getUserIdByUid(uid);
  if (!userId) throw Error('ユーザーが見つかりません');

  /* ユーザーの紐付け */
  const createdUser: ConnectUser = {
    user: {
      connect: {
        id: userId,
      },
    },
    role: parsedBody.data.role,
    subRole: parsedBody.data.subRole,
    status: 'active',
  };
  const belongsUsers = parsedBody.data.users
    ? [
        createdUser,
        ...(await Promise.all(
          parsedBody.data.users.map(async (user): Promise<ConnectUser> => {
            const findUser = await prisma.user.findFirst({
              where: { id: user.userId },
              select: { id: true },
            });

            if (!findUser) throw Error('ユーザーが見つかりません');

            return {
              user: {
                connect: {
                  id: user.userId,
                },
              },
              role: user.role,
              subRole: user.subRole,
              status: 'inviting',
            };
          }),
        )),
      ]
    : [createdUser];

  /* プロジェクトの作成 */
  return prisma.project
    .create({
      data: {
        name: parsedBody.data.name,
        prefix: parsedBody.data.prefix,
        domain: parsedBody.data.domain,
        keyVisual: generateAutoKeyvisual(),
        users: {
          create: belongsUsers,
        },
        infos: {
          create: parsedBody.data.infos,
        },
      },
    })
    .then(() => {
      belongsUsers.map(async (user) => {
        if (user.status === 'inviting') {
          const lastProject = await prisma.project.findFirst({
            where: {
              users: {
                some: {
                  status: 'inviting',
                  user: {
                    id: user.user.connect.id,
                  },
                },
              },
            },
            select: { id: true },
            orderBy: { id: 'desc' },
          });

          await prisma.notification.create({
            data: {
              targetUserId: user.user.connect.id,
              type: 'invite',
              content: `プロジェクト「${parsedBody.data.name}」に招待されました`,
              projectId: lastProject?.id,
            },
          });
        }
      });

      return true;
    })
    .catch((error: Error) => {
      throw Error(error.message);
    });
};

export default createProject;
