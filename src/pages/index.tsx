import type { NextPage } from 'next';
import HomeComponent from 'components/page/Home/Home';
import Layout from '~/components/layout/Layout';

const Home: NextPage = () => (
  <Layout>
    <HomeComponent />
  </Layout>
);

export default Home;
