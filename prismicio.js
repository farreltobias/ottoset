import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';

import sm from './sm.json';

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

/** The project's Prismic repository name. */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

/** @type {prismic.ClientConfig['routes']} */
const routes = [
  {
    type: 'project',
    lang: 'pt-br',
    path: '/projetos/:uid',
  },
];

const prismicClient = prismic.createClient(
  prismic.getEndpoint(repositoryName),
  {
    accessToken: process.env.PRISMIC_API_KEY,
    routes,
  },
);

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const client = new ApolloClient({
  link: new HttpLink({
    uri: prismic.getGraphQLEndpoint(repositoryName),
    fetch: prismicClient.graphQLFetch,
    useGETForQueries: true,
    accessToken: process.env.PRISMIC_API_KEY,
  }),
  cache: new InMemoryCache(),
});

export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    routes,
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
