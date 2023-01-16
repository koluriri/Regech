import type { NextPage } from 'next';
import RankingComponent from 'components/page/Ranking/Ranking';
import Layout from '~/components/layout/Layout';

const Ranking: NextPage = () => (
  <Layout>
    <RankingComponent />
  </Layout>
);

export default Ranking;
