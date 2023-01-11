import { Story, Meta } from '@storybook/react';
import Card from '../Card/Card';
import CardHeader from '../CardHeader/CardHeader';
import CardStack, { PropType } from './CardStack';

export default {
  component: CardStack,
} as Meta;

const Template: Story<PropType> = (args) => <CardStack {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Card>
        <CardHeader>Card</CardHeader>
      </Card>
      <Card>
        <CardHeader>Card</CardHeader>
      </Card>
      <Card>
        <CardHeader>Card</CardHeader>
      </Card>
      <Card>
        <CardHeader>Card</CardHeader>
      </Card>
    </>
  ),
};
