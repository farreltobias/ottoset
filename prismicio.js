import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';

import sm from './sm.json';

/** The project's Prismic repository name. */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

/** @type {prismic.ClientConfig['routes']} */
export const routes = [
  {
    type: 'project',
    lang: 'pt-br',
    path: '/projetos/:uid',
  },
  {
    type: 'faq',
    lang: 'pt-br',
    path: '/faq',
  },
  {
    type: 'career',
    lang: 'pt-br',
    path: '/carreiras/:uid',
  },
  {
    type: 'carousel',
    lang: 'pt-br',
    path: '/',
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, {
    accessToken: process.env.PRISMIC_API_KEY,
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

export const reactClient = prismic.createClient(sm.apiEndpoint, {
  accessToken: process.env.PRISMIC_API_KEY,
  routes,
});
