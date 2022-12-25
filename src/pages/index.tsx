import type { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import * as prismic from '@prismicio/client';
import { Query } from '@prismicio/types';

import { createClient } from 'prismicio';

import { Areas } from '@components/Areas';
import { Clients } from '@components/Home/Clients';
import { Energy } from '@components/Home/Energy';
import { Instagram } from '@components/Home/Instagram';
import { Monitor } from '@components/Home/Monitor';
import { Projects } from '@components/Home/Projects';
import { Reach } from '@components/Home/Reach';
import { Slider } from '@components/Home/Slider';

import { SEO } from '@seo/home';

import { services } from '@data/static/services';

import { CarouselDocument, ProjectDocument } from '.slicemachine/prismicio';

type Data = {
  id: string;
  media_type: string;
  media_url: string;
  timestamp: string;
};

type Paging = {
  cursors: {
    before: string;
    after: string;
  };
  next: string;
};

type InstaResponse = {
  data: Data[];
  paging: Paging;
};

export type Response = {
  data: Data[];
  error?: string;
};

export type ProjectsByCategory = {
  category: string;
  data: Query<ProjectDocument>;
};

type PageProps = {
  initialProjects: ProjectsByCategory[];
  images: Response['data'];
  carousel: CarouselDocument;
};

const Home: NextPage<PageProps> = ({ initialProjects, carousel, images }) => {
  return (
    <>
      <NextSeo {...SEO} />

      <Slider carousel={carousel} />
      <Areas services={services} />
      <Energy />
      <Monitor />
      <Projects initialData={initialProjects} />
      <Clients />
      <Reach />
      <Instagram images={images} />
    </>
  );
};

export default Home;

const getCategories = (
  projects: Query<ProjectDocument>,
  initialCategories: string[],
) => {
  let hasNullCategory = false;

  const categories = projects.results.reduce((acc: string[], project) => {
    const { category } = project.data;

    if (category === null) {
      hasNullCategory = true;
    }

    if (category && !acc.includes(category)) {
      acc.push(category);
    }

    return acc;
  }, initialCategories);

  return {
    categories,
    hasNullCategory,
    nextPage: projects.next_page,
  };
};

export const getAllCategories = async (
  initialResults: Query<ProjectDocument>,
): Promise<string[]> => {
  const { nextPage, categories, hasNullCategory } = getCategories(
    initialResults,
    [],
  );

  let continueSearch = !hasNullCategory && nextPage;
  let link = initialResults.next_page as string;
  let allCategories = categories;

  while (continueSearch) {
    const projects = (await fetch(link).then((response) =>
      response.json(),
    )) as Query<ProjectDocument>;

    const { categories, hasNullCategory, nextPage } = getCategories(
      projects,
      allCategories,
    );

    continueSearch = !hasNullCategory && nextPage;

    allCategories = categories;

    link = nextPage as string;
  }

  return allCategories;
};

const fetchImages = async (
  accumulator: Data[],
  url: string,
  limit: number,
): Promise<Data[]> => {
  const response = await fetch(url);

  const { data, paging } = (await response.json()) as InstaResponse;

  const images = data.reduce((acc, media) => {
    if (media.media_type === 'IMAGE') {
      acc.push(media);
    }

    return acc;
  }, accumulator);

  if (images.length < limit && paging.next) {
    const nextImages = await fetchImages(images, paging.next, limit);

    return nextImages;
  }

  return images.slice(0, limit);
};

const getInstagramPhotos = async (limit: number) => {
  const URL = 'https://graph.instagram.com/v15.0/me/media';
  const FIELDS = ['id', 'media_type', 'media_url', 'timestamp'];

  const { INSTAGRAM_ACCESS_TOKEN } = process.env;

  if (!INSTAGRAM_ACCESS_TOKEN) {
    throw new Error('Missing Instagram Access Token');
  }

  const query = new URLSearchParams({
    fields: FIELDS.join(','),
    access_token: INSTAGRAM_ACCESS_TOKEN,
    limit: limit.toString(),
  }).toString();

  return fetchImages([], `${URL}?${query}`, limit);
};

export const getStaticProps: GetStaticProps<PageProps> = async ({
  previewData,
}) => {
  const nextClient = createClient({ previewData });

  const INSTAGRAM_LIMIT = 12;

  const images = await getInstagramPhotos(INSTAGRAM_LIMIT).catch(() => null);

  if (!images) {
    console.error('Error fetching Instagram images');
  }

  const initialCategories = await nextClient.getByType('project', {
    graphQuery: `{
      project {
        category
      }
    }`,
    orderings: {
      field: 'my.project.category',
      direction: 'desc',
    },
    pageSize: 6,
  });

  const categories = await getAllCategories(initialCategories);

  const allProjectsPage = await nextClient.getByType('project', {
    graphQuery: `{
      project {
        title
        category
        description
        cover
        slices {
          ... on artigo {
            variation {
              ... on default {
                items {
                  paragraph
                }
              }
            }
          }
        }
      }
    }`,
    orderings: {
      field: 'document.last_publication_date',
      direction: 'desc',
    },
    pageSize: 6,
    page: 1,
  });

  const allProjects = {
    category: 'Todos',
    data: allProjectsPage,
  };

  const promises = categories.map(async (category) => {
    return nextClient
      .getByType('project', {
        graphQuery: `{
        project {
          title
          category
          description
          cover
          slices {
            ... on artigo {
              variation {
                ... on default {
                  items {
                    paragraph
                  }
                }
              }
            }
          }
        }
      }`,
        predicates: [prismic.predicate.at('my.project.category', category)],
        orderings: {
          field: 'document.last_publication_date',
          direction: 'desc',
        },
        pageSize: 6,
        page: 1,
      })
      .then((data) => ({
        category,
        data,
      }));
  });

  const projects = await Promise.all(promises);

  const carousel = await nextClient.getSingle('carousel');

  return {
    props: {
      initialProjects: [allProjects, ...projects],
      images: images || [],
      carousel,
    },
  };
};
