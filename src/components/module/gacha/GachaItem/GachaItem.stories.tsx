import { Story, Meta } from '@storybook/react';
import { IconRankingOne, IconRankingTwo } from '../../../Icon';
import GachaDetail from '../GachaDetail/GachaDetail';
import GachaItem, { PropType } from './GachaItem';

export default {
  component: GachaItem,
} as Meta;

const Template: Story<PropType> = (args) => <GachaItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Emoticon Generator',
  preview: [':D', 'XD', ':(', ';(', ';)', ';D'],
  id: 1,
  detail: (
    <GachaDetail
      created="2023/01/10 14:25:42"
      name="@koluriri"
      playCount={23}
      src="https://pbs.twimg.com/profile_images/1558029533047300096/TGTuFAw0_400x400.jpg"
    />
  ),
};

export const Icon = Template.bind({});
Icon.args = {
  icon: <IconRankingOne />,
  title: 'Emoticon Generator',
  preview: [':D', 'XD', ':(', ';(', ';)', ';D'],
  id: 1,
  detail: (
    <GachaDetail
      created="2023/01/10 14:25:42"
      name="@koluriri"
      playCount={23}
      src="https://pbs.twimg.com/profile_images/1558029533047300096/TGTuFAw0_400x400.jpg"
    />
  ),
};

export const Icon2 = Template.bind({});
Icon2.args = {
  icon: <IconRankingTwo />,
  title: 'Emoticon Generator',
  preview: [':D', 'XD', ':(', ';(', ';)', ';D'],
  id: 1,
  detail: (
    <GachaDetail
      created="2023/01/10 14:25:42"
      name="@koluriri"
      playCount={23}
      src="https://pbs.twimg.com/profile_images/1558029533047300096/TGTuFAw0_400x400.jpg"
    />
  ),
};
