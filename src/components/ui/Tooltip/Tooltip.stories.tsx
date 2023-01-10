import { Story, Meta } from '@storybook/react';
import Tooltip, { PropType } from './Tooltip';

export default {
  component: Tooltip,
} as Meta;

const Template: Story<PropType> = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Hello World', label: 'ラベル' };
