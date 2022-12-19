import { createPrismicLink } from 'apollo-link-prismic';

import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  link: createPrismicLink({
    uri: 'https://ottoset.prismic.io/graphql',
    accessToken: process.env.PRISMIC_API_KEY,
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache(),
});
