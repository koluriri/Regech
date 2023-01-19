import type { NextPage } from 'next';
import RankingComponent from 'components/page/Ranking/Ranking';
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

  const posts = await prisma.post.findMany({
    orderBy: {
      for_ranking_count: 'desc',
    },
    include: {
      author: true,
    },
    take: 30,
  });

  return {
    props: {
      posts,
    },
  };
};

const Ranking: NextPage<Props> = ({ posts }) => (
  <Layout>
    <RankingComponent posts={posts} />
  </Layout>
);

export default Ranking;
