import type { NextPage } from 'next';
import PostComponent from 'components/page/Post/Post';
import Layout from '~/components/layout/Layout';

const Post: NextPage = () => (
  <Layout>
    <PostComponent />
  </Layout>
);

export default Post;
