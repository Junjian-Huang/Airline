import { Story, Meta } from '@storybook/react';

import { SearchBar, ISearchBarProps} from './SearchBar';

export default {
  title: 'UI Components/SearchBar',
  component: SearchBar,
} as Meta;

const Template: Story<ISearchBarProps> = (args) => <SearchBar {...args}/>;

export const SearchBarExample = Template.bind({});