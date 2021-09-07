import React from 'react';
import { Story, Meta } from '@storybook/react';

import { AddAirlineForm, SubmitFormProps } from './AddAirlineForm';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export default {
  title: 'UI Components/Submit Form',
  component: AddAirlineForm,
} as Meta;

const mockedClient = new ApolloClient({
  uri: 'https://your-graphql-endpoint',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

const Template: Story<SubmitFormProps> = (args) => (
<ApolloProvider client={mockedClient}>
  <AddAirlineForm {...args} />
</ApolloProvider>);

export const AirlineForm = Template.bind({});


AirlineForm.args = {
};