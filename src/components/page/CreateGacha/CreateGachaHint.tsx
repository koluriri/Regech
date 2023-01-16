import { FC } from 'react';
import { useLocale } from '~/hooks/useLocale';

const CreateGachaHint: FC = () => {
  const { locale } = useLocale();

  return locale === 'ja' ? (
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
        A random string will be generated that matches the regular expression
        you entered.
        <br />
        <b>For example,</b> <code>LOLOLOLOL</code>is generated from
        <code className="blue">L(OL)+</code>.
      </p>
      <p>
        If you make an interesting gacha, post it and let's play together!
        <br />
        (You must be logged in to Twitter to post.)
      </p>
      <p>It is also recommended for learning regular expressions.</p>
    </>
  );
};

export default CreateGachaHint;
