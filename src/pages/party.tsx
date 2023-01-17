import type { NextPage } from 'next';
import PartyComponent from 'components/page/Party/Party';
import Layout from '~/components/layout/Layout';

const Party: NextPage = () => (
  <Layout>
    <PartyComponent />
  </Layout>
);

export default Party;
