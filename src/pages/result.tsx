import type { NextPage } from 'next';
import ResultComponent from 'components/page/Result/Result';
import Layout from '~/components/layout/Layout';

const Result: NextPage = () => (
  <Layout>
    <ResultComponent />
  </Layout>
);

export default Result;
