import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'UI Components/Button',
  component: Button,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
    parameters: {
      backgrounds: {
        values: [
          { name: 'red', value: '#f00' },
          { name: 'green', value: '#0f0' },
          { name: 'blue', value: '#00f' },
        ],
      },
    },
    decorators: [
      (Story) => (
        <div style={{ margin: '3em' }}>
          <Story />
        </div>
      ),
    ],
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
