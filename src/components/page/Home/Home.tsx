import { FC } from 'react';
import Head from 'next/head';
import Logo from '~/components/ui/Logo/Logo';
import Hero from '~/components/module/home/Hero/Hero';
import {
  IconRankingOne,
  IconRankingThree,
  IconRankingTwo,
} from '~/components/Icon';
import Card from '~/components/ui/Card/Card';
import TabHeader from '~/components/ui/TabHeader/TabHeader';
import GachaItem from '~/components/module/gacha/GachaItem/GachaItem';
import GachaDetail from '~/components/module/gacha/GachaDetail/GachaDetail';
import { useLocale } from '~/hooks/useLocale';

const Home: FC = () => {
  const { t } = useLocale();

  return (
    <div className="container">
      <Head>
        <title>{t.TITLE}</title>
      </Head>

      <Hero />

      <Card>
        <TabHeader
          active={0}
          items={[t.LATEST, t.RANKING]}
          links={['/', '/ranking']}
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
};

export default Home;
