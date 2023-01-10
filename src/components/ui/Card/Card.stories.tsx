import { Story, Meta } from '@storybook/react';
import { IconPencil, IconPlay } from '../../Icon';
import BigText from '../BigText/BigText';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
import GachaDetail from '../GachaDetail/GachaDetail';
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
        ガチャを作る
      </CardHeader>
      <Textarea placeholder="正規表現を入力" />
      <Selector
        handleChange={(val: string) => {
          console.log(val);
        }}
      />
      <Button block variant="primary">
        <IconPlay />
        ガチャを引く
      </Button>
    </>
  ),
  hint: (
    <>
      正規表現にマッチする
      <br />
      ランダムな文字列が生成されます。
    </>
  ),
};

export const Post = Template.bind({});
Post.args = {
  children: (
    <>
      <CardHeader>
        <span>Emoticon Generator</span>
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
        ガチャを引く
      </Button>
    </>
  ),
};
