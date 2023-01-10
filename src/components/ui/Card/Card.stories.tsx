import { Story, Meta } from '@storybook/react';
import { IconPencil, IconPlay } from '../../Icon';
import Button from '../Button/Button';
import CardHeader from '../CardHeader/CardHeader';
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
