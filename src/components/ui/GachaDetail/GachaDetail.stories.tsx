import { Story, Meta } from '@storybook/react';
import GachaDetail, { PropType } from './GachaDetail';

export default {
  component: GachaDetail,
} as Meta;

const Template: Story<PropType> = (args) => <GachaDetail {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://pbs.twimg.com/profile_images/1558029533047300096/TGTuFAw0_400x400.jpg',
  name: '@koluriri',
  playCount: 23,
  created: '2023/01/10 14:25:42',
};

export const Center = Template.bind({});
Center.args = {
  src: 'https://pbs.twimg.com/profile_images/1558029533047300096/TGTuFAw0_400x400.jpg',
  name: '@koluriri',
  playCount: 23,
  created: '2023/01/10 14:25:42',
  center: true,
};
