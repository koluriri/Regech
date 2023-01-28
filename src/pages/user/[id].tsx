import type { NextPage } from 'next';
import UserComponent from 'components/page/User/User';
import Layout from '~/components/layout/Layout';
import { GetServerSideProps } from 'next';
import { PrismaClient, Post, User } from '@prisma/client';

type Props = {
  posts: (Post & { author: User })[];
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { id } = ctx.query;

  const prisma = new PrismaClient({
    log: ['error'],
  });

  const posts = await prisma.post.findMany({
    where: {
      deleted: false,
      author: {
        userName: String(id),
      },
    },
    orderBy: {
      created: 'desc',
    },
    include: {
      author: true,
    },
  });

  return {
    props: {
      posts,
    },
  };
};

const UserWrapper: NextPage<Props> = ({ posts }) => (
  <Layout>
    <UserComponent posts={posts} />
  </Layout>
);

export default UserWrapper;
