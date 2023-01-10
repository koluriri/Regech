import { Story, Meta } from '@storybook/react';
import GachaDetail, { PropType } from './GachaDetail';

export default {
  component: GachaDetail,
} as Meta;

const Template: Story<PropType> = (args) => <GachaDetail {...args} />;

export const WithUsername = Template.bind({});
WithUsername.args = {
  src: 'https://pbs.twimg.com/profile_images/1558029533047300096/TGTuFAw0_400x400.jpg',
  name: '@koluriri',
  playCount: 23,
  created: 21398746287364,
};
