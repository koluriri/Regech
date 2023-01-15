import { FC } from 'react';
import Head from 'next/head';
import Logo from '~/components/ui/Logo/Logo';
import Button from '~/components/ui/Button/Button';
import { useRouter } from 'next/router';
import { IconPlay } from '~/components/Icon';
import Card from '~/components/ui/Card/Card';
import CardHeader from '~/components/ui/CardHeader/CardHeader';
import GachaDetail from '~/components/ui/GachaDetail/GachaDetail';
import BigText from '~/components/ui/BigText/BigText';
import Selector from '~/components/ui/Selector/Selector';
import DisplayResult from '~/components/ui/DisplayResult/DisplayResult';

const Result: FC<{ results: string[] }> = ({ results }) => {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <title>ガチャ結果 | 正規表現ガチャ</title>
      </Head>

      <Logo />

      <Card>
        <CardHeader>結果が出たよ！</CardHeader>
        <DisplayResult results={results} />
      </Card>

      <Button variant="tertiary" onClick={() => router.push('/')} id="gotop">
        ← トップへ
      </Button>
    </div>
  );
};

export default Result;
