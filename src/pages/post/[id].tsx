import type { GetServerSideProps, NextPage } from 'next';
import PostComponent from 'components/page/Post/Post';
import Layout from '~/components/layout/Layout';
import { Post, PrismaClient, User } from '@prisma/client';

type Props = {
  post: (Post & { author: User }) | null;
  recommendeds: (Post & { author: User })[];
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { id } = ctx.query;

  const prisma = new PrismaClient({ log: ['error'] });

  let postId = Number(id);
  if (Number.isNaN(postId)) postId = 0;

  const post = await prisma.post.findFirst({
    where: { id: postId },
    include: {
      author: true,
    },
  });

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
      post,
      recommendeds,
    },
  };
};

const PostPage: NextPage<Props> = ({ post, recommendeds }) => {
  if (post !== null)
    return (
      <Layout>
        <PostComponent post={post} recommendeds={recommendeds} />
      </Layout>
    );

  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}>404 Not Found</h1>
    </Layout>
  );
};

export default PostPage;
