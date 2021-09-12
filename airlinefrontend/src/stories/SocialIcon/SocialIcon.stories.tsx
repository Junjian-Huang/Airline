import React from 'react';
import githubLogo from "../assets/logos/github_logo.svg"
import linkedinLogo from "../assets/logos/linkedin_logo.svg"
import facebookLogo from "../assets/logos/facebook_logo.svg"
import discordLogo from "../assets/logos/discord_logo.svg"
import youtubeLogo from "../assets/logos/youtube_logo.svg"
import headerLogo from "../assets/logos/header_logo.svg"
import { Story, Meta } from '@storybook/react';
import { SocialIconProps, FooterSocialIcon } from './SocialIcon';



export default {
    title: 'UI Components/SocialIcon',
    component: FooterSocialIcon,
} as Meta;



const Template: Story<SocialIconProps> = (args) => (

    <div style={{ backgroundColor: "#47478d" }}>
        <FooterSocialIcon {...args} />
    </div>
)
export const GithubIcon = Template.bind({});
GithubIcon.args = {
    name: "GitHub",
    url: "https://github.com/Junjian-Huang/Airline",
    logo: githubLogo
};

export const LinkedInIcon = Template.bind({});
LinkedInIcon.args = {
    name: "Linkedin logo",
    url: "https://www.linkedin.com/in/junjian-jj-huang-7a952a172",
    logo: linkedinLogo
};

export const FacebookIcon = Template.bind({});
FacebookIcon.args = {
    name: "Facebook",
    url: "https://www.facebook.com",
    logo: facebookLogo
};
export const DiscordIcon = Template.bind({});
DiscordIcon.args = {
    name: "Discord",
    url: "https://discord.com/",
    logo: discordLogo
};

export const YoutubeIcon = Template.bind({});
YoutubeIcon.args = {
    name: "YouTube",
    url: "https://www.youtube.com",
    logo: youtubeLogo
};

export const HeaderIcon = Template.bind({});
HeaderIcon.args = {
    name: "Header",
    url: "https://www.airnewzealand.co.nz/",
    logo: headerLogo
};