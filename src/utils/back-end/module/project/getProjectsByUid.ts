import prisma from 'utils/back-end/prisma';
import getUserIdByUid from '../user/getUserIdByUid';

const getProjectsByUid = async (uid: string) => {
  const userId = await getUserIdByUid(uid);
  if (!userId) throw Error('ユーザーが見つかりません');

  const projects = await prisma.project.findMany({
    where: {
      deleted: false,
      users: {
        some: {
          status: 'active',
          user: {
            id: userId,
          },
        },
      },
    },
    select: {
      id: true,
      domain: true,
      name: true,
      type: true,
      prefix: true,
      logoWhite: true,
      keyVisual: true,
      icon: true,
      users: {
        select: {
          status: true,
          user: {
            select: {
              displayName: true,
              screenName: true,
              icon: true,
            },
          },
        },
      },
    },
  });

  return projects
    .map((project) => {
      if (project.users.length !== 0 && project.name) return project;

      return undefined;
    })
    .filter((e) => e);
};

export default getProjectsByUid;
