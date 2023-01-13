import { Story, Meta } from '@storybook/react';
import RegexGuide, { PropType } from './RegexGuide';

export default {
  component: RegexGuide,
} as Meta;

const Template: Story<PropType> = (args) => <RegexGuide {...args} />;

export const Default = Template.bind({});
Default.args = {};
