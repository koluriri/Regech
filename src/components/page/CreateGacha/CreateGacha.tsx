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
import { useLocale } from '~/hooks/useLocale';

const CreateGacha: FC = () => {
  const router = useRouter();
  const { t, locale } = useLocale();

  return (
    <div className="container">
      <Head>
        <title>
          {t.CREATE_GACHA_HEADER} | {t.LOGO}
        </title>
      </Head>

      <Card
        hint={
          locale === 'ja' ? (
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
          ) : (
            <>
              <p>
                A random string will be generated that matches the regular
                expression you entered.
                <br />
                <b>For example,</b> <code>LOLOLOLOL</code>is generated from the
                <code className="blue">L(OL)+</code>.
              </p>
              <p>
                If you make an interesting gacha, post it and let's play
                together!
                <br />
                (You must be logged in to Twitter to post.)
              </p>
              <p>It is also recommended for learning regular expressions.</p>
            </>
          )
        }
      >
        <CardHeader>
          <IconPencil />
          {t.CREATE_GACHA_HEADER}
        </CardHeader>
        <Textarea placeholder={t.ENTER_REGEXP} />
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
          {t.PLAY_GACHA}
        </Button>
      </Card>

      <Button variant="tertiary" onClick={() => router.push('/')} id="gotop">
        ← {t.GOTOP}
      </Button>
    </div>
  );
};

export default CreateGacha;
