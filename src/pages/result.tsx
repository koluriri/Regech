import type { GetServerSideProps, NextPage } from 'next';
import ResultComponent from 'components/page/Result/Result';
import Layout from '~/components/layout/Layout';
import { Post, PrismaClient, User } from '@prisma/client';

type Props = {
  recommendeds: (Post & { author: User })[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const prisma = new PrismaClient({ log: ['error'] });

  const postsCount = await prisma.post.count();
  const skip = Math.floor(Math.random() * postsCount);
  const recommendeds = await prisma.post.findMany({
    take: 3,
    skip,
    orderBy: {
      created: 'desc',
    },
    include: {
      author: true,
    },
  });

  return {
    props: {
      recommendeds,
    },
  };
};

const Result: NextPage<Props> = ({ recommendeds }) => (
  <Layout>
    <ResultComponent recommendeds={recommendeds} />
  </Layout>
);

export default Result;
