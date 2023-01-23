import prisma from '~/utils/prisma';

const updatePlayed = async (id: number) => {
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
