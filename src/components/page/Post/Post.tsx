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

const Post: FC = () => {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <title>ねこ語ジェネレーター | 正規表現ガチャ</title>
      </Head>

      <Logo />

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
        <BigText>
          {`(:|;|8^|&-|:'-|8-|(:-|:,-|:-|=|X|:*)(D|)|P|e|<|c|0|O|}|o|||(|((|\\\\)`}
        </BigText>
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

export default Post;
