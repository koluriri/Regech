import { Story, Meta } from '@storybook/react';
import Textarea, { PropType } from './Textarea';

export default {
  component: Textarea,
} as Meta;

const Template: Story<PropType> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: '正規表現を入力',
  maxLength: 200,
};
