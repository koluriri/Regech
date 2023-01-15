import { FC } from 'react';
import Head from 'next/head';
import Logo from '~/components/ui/Logo/Logo';
import { IconPencil, IconPlay } from '~/components/Icon';
import Card from '~/components/ui/Card/Card';
import CardHeader from '~/components/ui/CardHeader/CardHeader';
import Textarea from '~/components/ui/Textarea/Textarea';
import RegexGuide from '~/components/ui/RegexGuide/RegexGuide';
import Selector from '~/components/ui/Selector/Selector';
import Button from '~/components/ui/Button/Button';
import { useRouter } from 'next/router';

const CreateGacha: FC = () => {
  const router = useRouter();

  return (
    <div className="container">
      <Head>
        <title>ガチャをつくる | 正規表現ガチャ</title>
      </Head>

      <Logo />

      <Card
        hint={
          <>
            <p>
              正規表現にマッチする
              <br />
              ランダムな文字列が生成されます。
              <br />
              <b>例</b> <code>(にゃん?)+</code>→
              <code className="blue">にゃにゃんにゃんにゃ</code>
            </p>
            <p>
              おもしろいガチャができたら
              <br />
              投稿してみんなであそぼう！
              <br />
              ※投稿するにはTwitterログインが必要です。
            </p>
            <p>正規表現の学習にもおすすめです。</p>
          </>
        }
      >
        <CardHeader>
          <IconPencil />
          ガチャをつくる
        </CardHeader>
        <Textarea placeholder="正規表現を入力" />
        <RegexGuide
          insertTextarea={(text: string) => {
            alert(text);
          }}
        />
        <Selector
          handleChange={(val: string) => {
            console.log(val);
          }}
        />
        <Button block variant="primary" onClick={() => router.push('/party')}>
          <IconPlay />
          ガチャをまわす
        </Button>
      </Card>

      <Button variant="tertiary" onClick={() => router.push('/')} id="gotop">
        ← トップへ
      </Button>
    </div>
  );
};

export default CreateGacha;
