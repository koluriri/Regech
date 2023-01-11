import { Story, Meta } from '@storybook/react';
import {
  IconPencil,
  IconPlay,
  IconRankingOne,
  IconRankingThree,
  IconRankingTwo,
} from '../../Icon';
import BigText from '../BigText/BigText';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import GachaDetail from '../GachaDetail/GachaDetail';
import GachaItem from '../GachaItem/GachaItem';
import RegexGuide from '../RegexGuide/RegexGuide';
import Selector from '../Selector/Selector';
import Textarea from '../Textarea/Textarea';
import Card, { PropType } from './Card';

export default {
  component: Card,
} as Meta;

const Template: Story<PropType> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
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
      <Button block variant="primary">
        <IconPlay />
        ガチャをまわす
      </Button>
    </>
  ),
  hint: (
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
  ),
};

export const Post = Template.bind({});
Post.args = {
  children: (
    <>
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
      <Button block variant="primary">
        <IconPlay />
        ガチャをまわす
      </Button>
    </>
  ),
};

export const Ranking = Template.bind({});
Ranking.args = {
  children: (
    <>
      ランキング
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
    </>
  ),
};
