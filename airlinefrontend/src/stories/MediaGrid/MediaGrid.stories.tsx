import { Story, Meta } from '@storybook/react';
import { MediaGrid, IMediaGridProps } from './MediaGrid';

export default {
  title: 'UI Components/MediaGrid',
  component: MediaGrid,
} as Meta;

const Template: Story<IMediaGridProps> = (args) => <MediaGrid {...args}/>;

export const MediaGridExample = Template.bind(this);


MediaGridExample.args = {
    SearchQuery: "How are you",
}
