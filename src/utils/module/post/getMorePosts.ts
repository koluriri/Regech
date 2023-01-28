import { postTake } from '~/types/types';
import prisma from '~/utils/prisma';

const getMorePosts = async (page: number) =>
  prisma.post.findMany({
    orderBy: {
      created: 'desc',
    },
    include: {
      author: true,
    },
    where: {
      deleted: false,
    },
    take: postTake,
    skip: (page - 1) * postTake,
  });

export default getMorePosts;
