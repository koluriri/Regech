import { Story, Meta } from '@storybook/react';
import BigText, { PropType } from './BigText';

export default {
  component: BigText,
} as Meta;

const Template: Story<PropType> = (args) => <BigText {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    "(:|;|8^|&-|:'-|8-|(:-|:,-|:-|=|X|:*)(D|)|P|e|<|c|0|O|}|o|||(|((|\\\\)",
};
