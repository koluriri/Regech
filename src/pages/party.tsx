import type { NextPage } from 'next';
import PartyComponent from 'components/page/Party/Party';
import Layout from '~/components/layout/Layout';

const Party: NextPage = () => (
  <Layout>
    <PartyComponent
      timer={10}
      results={[
        'にゃにゃんにゃにゃにゃんにゃにゃにゃんにゃにゃにゃんにゃ',
        'にゃにゃん',
        'にゃんにゃんにゃ',
        'にゃにゃにゃにゃにゃにゃにゃにゃ',
        'にゃにゃんにゃにゃにゃんにゃにゃんにゃ',
        'にゃにゃんにゃにゃにゃんにゃにゃにゃんにゃにゃにゃんにゃ',
        'にゃにゃん',
        'にゃんにゃんにゃ',
        'にゃにゃにゃにゃにゃにゃにゃにゃ',
        'さいご',
      ]}
    />
  </Layout>
);

export default Party;
