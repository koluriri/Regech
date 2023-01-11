import { Story, Meta } from '@storybook/react';
import PartyStage, { PropType } from './PartyStage';

export default {
  component: PartyStage,
} as Meta;

const Template: Story<PropType> = (args) => <PartyStage {...args} />;

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
