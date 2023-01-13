import { Story, Meta } from '@storybook/react';
import Input, { PropType } from './Input';

export default {
  component: Input,
} as Meta;

const Template: Story<PropType> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'タイトルを入力',
  maxLength: 17,
};
