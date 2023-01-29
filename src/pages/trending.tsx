import type { NextPage } from 'next';
import TrendingComponent from 'components/page/Trending/Trending';
import Layout from '~/components/layout/Layout';
import { GetServerSideProps } from 'next';
import { PrismaClient, Post, User } from '@prisma/client';

type Props = {
  posts: (Post & { author: User })[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const prisma = new PrismaClient({
    log: ['error'],
  });

  const latestPosts = await prisma.post.findMany({
    orderBy: {
      created: 'desc',
    },
    where: { deleted: false },
    include: { author: true },
    take: 60,
  });

  const now = new Date();

  const posts = latestPosts
    .map((post) => {
      const diff = now.getTime() - post.created.getTime();

      return {
        ...post,
        index: diff / post.play_count,
      };
    })
    .sort((a, b) => a.index - b.index);

  return {
    props: {
      posts: posts.splice(0, 20),
    },
  };
};

const Trending: NextPage<Props> = ({ posts }) => (
  <Layout>
    <TrendingComponent posts={posts} />
  </Layout>
);

export default Trending;
