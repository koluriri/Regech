import { FC } from 'react';
import Head from 'next/head';
import Logo from '~/components/ui/Logo/Logo';
import Button from '~/components/ui/Button/Button';
import { useRouter } from 'next/router';
import { IconPencil, IconPlay } from '~/components/Icon';
import Card from '~/components/ui/Card/Card';
import CardHeader from '~/components/ui/CardHeader/CardHeader';
import GachaDetail from '~/components/ui/GachaDetail/GachaDetail';
import BigText from '~/components/ui/BigText/BigText';
import Selector from '~/components/ui/Selector/Selector';
import DisplayResult from '~/components/ui/DisplayResult/DisplayResult';
import CardStack from '~/components/ui/CardStack/CardStack';

const Result: FC<{ results: string[] }> = ({ results }) => {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <title>ガチャ結果 | 正規表現ガチャ</title>
      </Head>

      <CardStack>
        <Card>
          <CardHeader>結果が出たよ！</CardHeader>
          <DisplayResult results={results} />
          <Button variant="sky" block>
            結果をツイート
          </Button>
        </Card>

        <Card>
          <CardHeader>つくったガチャを投稿する</CardHeader>
          <Button variant="sky" block>
            Twitterでログインして
            <br />
            つくったガチャを投稿する
          </Button>
        </Card>

        <Card>
          <CardHeader>あたらしくガチャをつくる</CardHeader>
          <Button
            variant="primary"
            block
            onClick={() => router.push('/create')}
          >
            <IconPencil />
            ガチャをつくる
          </Button>
        </Card>
      </CardStack>

      <Button variant="tertiary" onClick={() => router.push('/')} id="gotop">
        ← トップへ
      </Button>
    </div>
  );
};

export default Result;
