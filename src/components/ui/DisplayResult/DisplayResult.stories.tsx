import { Story, Meta } from '@storybook/react';
import DisplayResult, { PropType } from './DisplayResult';

export default {
  component: DisplayResult,
} as Meta;

const Template: Story<PropType> = (args) => <DisplayResult {...args} />;

export const Default = Template.bind({});
Default.args = {
  results: [
    'にゃにゃんにゃにゃにゃんにゃにゃにゃんにゃにゃにゃんにゃ',
    'にゃにゃん',
    'にゃんにゃんにゃ',
    'にゃにゃにゃにゃにゃにゃにゃにゃ',
    'にゃにゃんにゃにゃにゃんにゃにゃんにゃ',
    'にゃにゃんにゃにゃにゃんにゃにゃにゃんにゃにゃにゃんにゃ',
    'にゃにゃん',
    'にゃんにゃんにゃ',
    'にゃにゃにゃにゃにゃにゃにゃにゃ',
    'さいご',
  ],
};
