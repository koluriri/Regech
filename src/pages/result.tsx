import type { NextPage } from 'next';
import ResultComponent from 'components/page/Result/Result';
import Layout from '~/components/layout/Layout';

const Result: NextPage = () => (
  <Layout>
    <ResultComponent
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

export default Result;
