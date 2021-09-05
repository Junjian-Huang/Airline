import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AirHeader, HeaderProps } from './AirHeader';

export default {
  title: 'UI Components/AirHeader',
  component: AirHeader,
} as Meta;

const Template: Story<HeaderProps> = (args) => <AirHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    __typename: "Aircraft",
    id: "99",
    type: "JJ Huang",
    gitHub: "Shaoya",
    imageURL: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
};
