import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Header, HeaderProps } from './AirHeader';

export default {
  title: 'UI Components/AirHeader',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
};
