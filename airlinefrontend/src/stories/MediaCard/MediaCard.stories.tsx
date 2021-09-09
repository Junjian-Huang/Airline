import { Story, Meta } from '@storybook/react';

import { MediaCard, IMediaCardProps } from './MediaCard';

export default {
  title: 'UI Components/MediaCard',
  component: MediaCard,
} as Meta;

const Template: Story<IMediaCardProps> = (args) => <MediaCard {...args}/>;

export const MediaCardExample = Template.bind(this);

MediaCardExample.args ={
    ImageUrl: "https://resources.stuff.co.nz/content/dam/images/1/l/f/u/7/4/image.related.StuffLandscapeSixteenByNine.1240x700.1lfsut.png/1510520283662.jpg?format=pjpg&optimize=medium",
    Description: "Some information here........"
}


