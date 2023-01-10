import { Story, Meta } from '@storybook/react';
import { IconPencil, IconPlay } from '../../Icon';
import Button, { PropType } from './Button';

export default {
  component: Button,
} as Meta;

const Template: Story<PropType> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <IconPlay />
      あそぶ
    </>
  ),
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: (
    <>
      <IconPlay />
      ガチャを引く
    </>
  ),
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: (
    <>
      <IconPencil />
      ガチャをつくる
    </>
  ),
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: '← もどる',
};

export const Block = Template.bind({});
Block.args = {
  variant: 'primary',
  block: true,
  children: (
    <>
      <IconPlay />
      ガチャを引く
    </>
  ),
};

export const Caption = Template.bind({});
Caption.args = {
  caption: 'aaかbb',
  children: <>(aa|bb)</>,
};

export const Sky = Template.bind({});
Sky.args = {
  variant: 'sky',
  children: '結果をツイート',
};

export const Blue = Template.bind({});
Blue.args = {
  variant: 'blue',
  children: '投稿する',
};
