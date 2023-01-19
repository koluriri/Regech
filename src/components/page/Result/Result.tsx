/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, useEffect } from 'react';
import Head from 'next/head';
import Button from '~/components/ui/Button/Button';
import { useRouter } from 'next/router';
import { IconGachaSingle } from '~/components/Icon';
import Card from '~/components/ui/Card/Card';
import CardHeader from '~/components/ui/CardHeader/CardHeader';
import GachaDetail from '~/components/module/gacha/GachaDetail/GachaDetail';
import DisplayResult from '~/components/module/result/DisplayResult/DisplayResult';
import CardStack from '~/components/ui/CardStack/CardStack';
import useLocale from '~/hooks/useLocale';
import GoTopButton from '~/components/module/create/GoTopButton/GoTopButton';
import { resultsAtom } from '~/atoms/atoms';
import { useAtom } from 'jotai';

const Result: FC = () => {
  const router = useRouter();
  const { t } = useLocale();
  const [results, setResults] = useAtom(resultsAtom);

  useEffect(() => {
    if (results.length === 0) router.push('/').catch(() => alert('Error!'));
  }, [router, results]);

  return (
    <div className="container">
      <Head>
        <title>{t.RESULTS}</title>
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
          <Button
            variant="primary"
            block
            onClick={async () => {
              setResults([]);
              await router.push('/create');
            }}
          >
            <IconGachaSingle />
            {t.ONEMORETIME}
          </Button>
        </Card>

        <Card>
          <CardHeader>{t.GACHA_POST_HEADER}</CardHeader>
          <Button variant="sky" block>
            {t.GACHA_POST_LOGIN}
          </Button>
        </Card>
      </CardStack>

      <GoTopButton />
    </div>
  );
};

export default Result;
