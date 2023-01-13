import { FC } from 'react';
import Head from 'next/head';
import Logo from '~/components/ui/Logo/Logo';
import Hero from '~/components/ui/Hero/Hero';
import {
  IconRankingOne,
  IconRankingThree,
  IconRankingTwo,
} from '~/components/Icon';
import Card from '~/components/ui/Card/Card';
import TabHeader from '~/components/ui/TabHeader/TabHeader';
import GachaItem from '~/components/ui/GachaItem/GachaItem';
import GachaDetail from '~/components/ui/GachaDetail/GachaDetail';

const Home: FC = () => (
  <div className="container">
    <Head>
      <title>正規表現ガチャ | 正規表現でガチャをまわそう</title>
    </Head>

    <Logo />
    <Hero />

    <Card>
      <TabHeader
        active={1}
        items={['新着投稿', 'ランキング']}
        links={['#latest', '#ranking']}
      />
      <GachaItem
        detail={
          <GachaDetail
            created="2023/01/10 14:25:42"
            name="@koluriri"
            playCount={23}
            src="https://pbs.twimg.com/profile_images/1558029533047300096/TGTuFAw0_400x400.jpg"
          />
        }
        icon={<IconRankingOne />}
        id={1}
        preview={[
          'にゃんにゃにゃにゃんにゃにゃにゃんにゃにゃん',
          'にゃにゃんにゃんにゃんにゃにゃんにゃん',
          'にゃんにゃんにゃにゃんにゃんにゃにゃん',
          'にゃにゃにゃん',
          'にゃんにゃにゃんにゃにゃんにゃにゃんにゃ',
          'にゃんにゃんにゃんにゃんにゃん',
        ]}
        title="ねこ語ジェネレーター"
      />
      <GachaItem
        detail={
          <GachaDetail
            created="2023/01/10 14:25:42"
            name="@koluriri"
            playCount={23}
            src="https://pbs.twimg.com/profile_images/1558029533047300096/TGTuFAw0_400x400.jpg"
          />
        }
        icon={<IconRankingTwo />}
        id={1}
        preview={[
          'にゃんにゃにゃにゃんにゃにゃにゃんにゃにゃん',
          'にゃにゃんにゃんにゃんにゃにゃんにゃん',
          'にゃんにゃんにゃにゃんにゃんにゃにゃん',
          'にゃにゃにゃん',
          'にゃんにゃにゃんにゃにゃんにゃにゃんにゃ',
          'にゃんにゃんにゃんにゃんにゃん',
        ]}
        title="ねこ語ジェネレーター"
      />
      <GachaItem
        detail={
          <GachaDetail
            created="2023/01/10 14:25:42"
            name="@koluriri"
            playCount={23}
            src="https://pbs.twimg.com/profile_images/1558029533047300096/TGTuFAw0_400x400.jpg"
          />
        }
        icon={<IconRankingThree />}
        id={1}
        preview={[
          'にゃんにゃにゃにゃんにゃにゃにゃんにゃにゃん',
          'にゃにゃんにゃんにゃんにゃにゃんにゃん',
          'にゃんにゃんにゃにゃんにゃんにゃにゃん',
          'にゃにゃにゃん',
          'にゃんにゃにゃんにゃにゃんにゃにゃんにゃ',
          'にゃんにゃんにゃんにゃんにゃん',
        ]}
        title="ねこ語ジェネレーター"
      />
      <GachaItem
        detail={
          <GachaDetail
            created="2023/01/10 14:25:42"
            name="@koluriri"
            playCount={23}
            src="https://pbs.twimg.com/profile_images/1558029533047300096/TGTuFAw0_400x400.jpg"
          />
        }
        id={1}
        preview={[
          'にゃんにゃにゃにゃんにゃにゃにゃんにゃにゃん',
          'にゃにゃんにゃんにゃんにゃにゃんにゃん',
          'にゃんにゃんにゃにゃんにゃんにゃにゃん',
          'にゃにゃにゃん',
          'にゃんにゃにゃんにゃにゃんにゃにゃんにゃ',
          'にゃんにゃんにゃんにゃんにゃん',
        ]}
        title="ねこ語ジェネレーター"
      />
      <GachaItem
        detail={
          <GachaDetail
            created="2023/01/10 14:25:42"
            name="@koluriri"
            playCount={23}
            src="https://pbs.twimg.com/profile_images/1558029533047300096/TGTuFAw0_400x400.jpg"
          />
        }
        id={1}
        preview={[
          'にゃんにゃにゃにゃんにゃにゃにゃんにゃにゃん',
          'にゃにゃんにゃんにゃんにゃにゃんにゃん',
          'にゃんにゃんにゃにゃんにゃんにゃにゃん',
          'にゃにゃにゃん',
          'にゃんにゃにゃんにゃにゃんにゃにゃんにゃ',
          'にゃんにゃんにゃんにゃんにゃん',
        ]}
        title="ねこ語ジェネレーター"
      />
      <GachaItem
        detail={
          <GachaDetail
            created="2023/01/10 14:25:42"
            name="@koluriri"
            playCount={23}
            src="https://pbs.twimg.com/profile_images/1558029533047300096/TGTuFAw0_400x400.jpg"
          />
        }
        id={1}
        preview={[
          'にゃんにゃにゃにゃんにゃにゃにゃんにゃにゃん',
          'にゃにゃんにゃんにゃんにゃにゃんにゃん',
          'にゃんにゃんにゃにゃんにゃんにゃにゃん',
          'にゃにゃにゃん',
          'にゃんにゃにゃんにゃにゃんにゃにゃんにゃ',
          'にゃんにゃんにゃんにゃんにゃん',
        ]}
        title="ねこ語ジェネレーター"
      />
    </Card>
  </div>
);

export default Home;
