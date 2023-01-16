import { Story, Meta } from '@storybook/react';
import { IconBulb, IconPencil } from '../../Icon';
import GachaDetail from '../../module/gacha/GachaDetail/GachaDetail';
import CardHeader, { PropType } from './CardHeader';

export default {
  component: CardHeader,
} as Meta;

const Template: Story<PropType> = (args) => <CardHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <IconPencil />
      ガチャをつくる
    </>
  ),
};

export const Hint = Template.bind({});
Hint.args = {
  children: (
    <>
      <IconBulb />
      ヒント
    </>
  ),
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  children: <>つくったガチャを投稿する</>,
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: (
    <>
      <span>ねこ語ジェネレーター</span>
      <GachaDetail
        center
        created="2023/01/10 14:25:42"
        name="@koluriri"
        playCount={23}
        src="https://pbs.twimg.com/profile_images/1558029533047300096/TGTuFAw0_400x400.jpg"
      />
    </>
  ),
};
