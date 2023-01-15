import type { NextPage } from 'next';
import PartyComponent from 'components/page/Party/Party';

const Party: NextPage = () => (
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
);

export default Party;
