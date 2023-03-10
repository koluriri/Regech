import type { NextPage } from 'next';
import HomeComponent from 'components/page/Home/Home';
import Layout from '~/components/layout/Layout';
import { GetServerSideProps } from 'next';
import { PrismaClient, Post, User } from '@prisma/client';
import { postTake } from '~/types/types';

type Props = {
  posts: (Post & { author: User })[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const prisma = new PrismaClient({
    log: ['error'],
  });

  const posts = await prisma.post.findMany({
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
  });

  return {
    props: {
      posts,
    },
  };
};

const Home: NextPage<Props> = ({ posts }) => (
  <Layout>
    <HomeComponent posts={posts} />
  </Layout>
);

export default Home;
