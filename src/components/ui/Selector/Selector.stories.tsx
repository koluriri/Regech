import { Story, Meta } from '@storybook/react';
import Selector, { PropType } from './Selector';

export default {
  component: Selector,
} as Meta;

const Template: Story<PropType> = (args) => <Selector {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleChange: (val: string) => {
    console.log(val);
  },
};
