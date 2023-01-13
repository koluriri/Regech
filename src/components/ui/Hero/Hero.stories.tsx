import { Story, Meta } from '@storybook/react';
import { IconPencil } from '../../Icon';
import Button from '../Button/Button';
import Hero, { PropType } from './Hero';

export default {
  component: Hero,
} as Meta;

const Template: Story<PropType> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <span>
        正規表現を<span className="text-red">書いて</span>
      </span>
      <span>
        ガチャを<span className="text-yellow">まわそう</span>
      </span>
      <span>
        <span className="text-teal">投稿</span>しよう
      </span>
      <Button variant="secondary">
        <IconPencil />
        ガチャをつくる
      </Button>
    </>
  ),
};
