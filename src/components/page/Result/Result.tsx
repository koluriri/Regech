import { FC, useEffect } from 'react';
import Head from 'next/head';
import Logo from '~/components/ui/Logo/Logo';
import Button from '~/components/ui/Button/Button';
import { useRouter } from 'next/router';
import { IconPencil, IconPlay } from '~/components/Icon';
import Card from '~/components/ui/Card/Card';
import CardHeader from '~/components/ui/CardHeader/CardHeader';
import GachaDetail from '~/components/module/gacha/GachaDetail/GachaDetail';
import BigText from '~/components/ui/BigText/BigText';
import Selector from '~/components/ui/Selector/Selector';
import DisplayResult from '~/components/module/result/DisplayResult/DisplayResult';
import CardStack from '~/components/ui/CardStack/CardStack';
import { useLocale } from '~/hooks/useLocale';
import GoTopButton from '~/components/module/create/GoTopButton/GoTopButton';
import { useAtom } from 'jotai';
import { resultsAtom } from '~/atoms/atoms';

const Result: FC = () => {
  const router = useRouter();
  const { t } = useLocale();
  const [results, setResults] = useAtom(resultsAtom);

  useEffect(() => {
    if (results.length === 0) router.push('/');
    setResults((r) => []);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>
          {t.RESULTS} | {t.LOGO}
        </title>
      </Head>

      <CardStack>
        <Card>
          <CardHeader>
            <span>ねこ語ジェネレーター</span>
            <GachaDetail
              center
              created="2023/01/10 14:25:42"
              name="@koluriri"
              playCount={23}
              src="https://pbs.twimg.com/profile_images/1558029533047300096/TGTuFAw0_400x400.jpg"
            />
          </CardHeader>
          <CardHeader>{t.RESULTS}</CardHeader>
          <DisplayResult results={results} />
          <Button variant="sky" block>
            {t.TWEET_RESULT}
          </Button>
        </Card>

        <Card>
          <CardHeader>{t.GACHA_POST_HEADER}</CardHeader>
          <Button variant="sky" block>
            {t.GACHA_POST_LOGIN}
          </Button>
        </Card>

        <Card>
          <CardHeader>{t.CREATE_GACHA_HEADER}</CardHeader>
          <Button
            variant="primary"
            block
            onClick={() => router.push('/create')}
          >
            <IconPencil />
            {t.CREATE_GACHA}
          </Button>
        </Card>
      </CardStack>

      <GoTopButton />
    </div>
  );
};

export default Result;
