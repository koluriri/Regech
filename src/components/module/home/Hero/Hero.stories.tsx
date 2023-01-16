import { Story, Meta } from '@storybook/react';
import Hero from './Hero';

export default {
  component: Hero,
} as Meta;

const Template: Story = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {};
