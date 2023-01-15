import type { NextPage } from 'next';
import CreateGachaComponent from 'components/page/CreateGacha/CreateGacha';
import Layout from '~/components/layout/Layout';

const CreateGacha: NextPage = () => (
  <Layout>
    <CreateGachaComponent />
  </Layout>
);

export default CreateGacha;
