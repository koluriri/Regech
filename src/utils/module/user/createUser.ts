import prisma from '~/utils/prisma';
import zodErrorToString from '~/utils/zodErrorToString';
// import Blacklists from './Blacklists';
import { RequiredBodySchema } from './createUser.schema';

const updatePlayed = async (body: unknown) => {
  const parsedBody = RequiredBodySchema.safeParse(body);
  if (!parsedBody.success) throw Error(zodErrorToString(parsedBody.error));

  // if(Blacklists.includes(parsedBody.data.userName)) throw Error('ログインできませんでした。');

  const user = await prisma.user.findFirst({
    where: {
      userName: parsedBody.data.userName,
    },
    select: {
      id: true,
    },
  });

  if (user) {
    return prisma.user
      .update({
        where: { id: user.id },
        data: parsedBody.data,
      })
      .then(() => true)
      .catch((error: Error) => {
        throw Error(error.message);
      });
  }

  return prisma.user
    .create({
      data: parsedBody.data,
    })
    .then(() => true)
    .catch((error: Error) => {
      throw Error(error.message);
    });
};

export default updatePlayed;
