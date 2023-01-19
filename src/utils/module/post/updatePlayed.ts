import prisma from '~/utils/prisma';
import zodErrorToString from '~/utils/zodErrorToString';
import { RequiredBodySchema } from './updatePlayed.schema';

const updatePlayed = async (id: number, body: unknown) => {
  const parsedBody = RequiredBodySchema.safeParse(body);
  if (!parsedBody.success) throw Error(zodErrorToString(parsedBody.error));

  /* const userId = await getUserIdByUid(uid);
  if (!userId) throw Error('ユーザーが見つかりません'); */

  const post = await prisma.post.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
    },
  });

  if (!post) throw Error('投稿が存在しません');

  return prisma.post
    .update({
      where: {
        id,
      },
      data: {
        play_count: {
          increment: 1,
        },
        for_ranking_count: {
          increment: 1,
        },
      },
    })
    .then(() => true)
    .catch((error: Error) => {
      throw Error(error.message);
    });
};

export default updatePlayed;
