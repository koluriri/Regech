import { Story, Meta } from '@storybook/react';
import TabHeader, { PropType } from './TabHeader';

export default {
  component: TabHeader,
} as Meta;

const Template: Story<PropType> = (args) => <TabHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['新着投稿', 'ランキング'],
  links: ['#latest', '#ranking'],
  active: 1,
};
