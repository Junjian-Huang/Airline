import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SideBar } from './Sidebar';

export default {
    title: 'UI Components/SideBar',
    component: SideBar,
} as Meta;

const Template: Story = () => <SideBar />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {
        __typename: "Aircraft",
        id: "1",
        name: "Name in Storybook Sidebar",
        gitHub: "johndoe",
        imageURI: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
};