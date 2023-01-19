import type { GetServerSideProps, NextPage } from 'next';
import PostComponent from 'components/page/Post/Post';
import Layout from '~/components/layout/Layout';
import { Post, PrismaClient, User } from '@prisma/client';
import { useRouter } from 'next/router';

type Props = {
  post: (Post & { author: User }) | null;
  recommendeds: (Post & { author: User })[];
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { id } = ctx.query;

  const prisma = new PrismaClient({ log: ['error'] });

  const post = await prisma.post.findFirst({
    where: { id: Number(id) },
    include: {
      author: true,
    },
  });

  const recommendeds = await prisma.post.findMany({
    orderBy: {
      created: 'desc',
    },
    include: {
      author: true,
    },
    take: 3,
  });

  return {
    props: {
      post,
      recommendeds,
    },
  };
};

const PostPage: NextPage<Props> = ({ post, recommendeds }) => {
  const router = useRouter();

  if (post !== null)
    return (
      <Layout>
        <PostComponent post={post} recommendeds={recommendeds} />
      </Layout>
    );

  router.push('/').catch(() => alert('Error!'));

  return null;
};

export default PostPage;
