import { Story, Meta } from '@storybook/react';
import Avatar, { PropType } from './Avatar';

export default {
  component: Avatar,
} as Meta;

const Template: Story<PropType> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://pbs.twimg.com/profile_images/1558029533047300096/TGTuFAw0_400x400.jpg',
  username: '@koluriri',
};
