import { client } from 'prismicio';

import { CATEGORIES } from './queries/categories';
import { AllProjectsQuery } from './types';

type Categories = {
  categories: string[];
  hasNullCategory: boolean;
  hasNextPage: boolean;
  endCursor: string;
};

const getCategories = async (cursor = ''): Promise<Categories> => {
  let hasNullCategory = false;

  const {
    data: {
      allProjects: {
        edges,
        pageInfo: { hasNextPage, endCursor },
      },
    },
  } = await client.query<AllProjectsQuery>({
    query: CATEGORIES,
    variables: {
      cursor,
    },
  });

  const categories = edges?.reduce((acc: string[], project) => {
    const { category } = project?.node || {};

    if (category === null) {
      hasNullCategory = true;
    }

    if (category && !acc.includes(category)) {
      acc.push(category);
    }

    return acc;
  }, []);

  return {
    categories: categories || [],
    hasNullCategory,
    hasNextPage,
    endCursor: endCursor || '',
  };
};

export const getAllCategories = async (): Promise<string[]> => {
  let continueSearch = true;
  let cursor = '';

  const allCategories: string[] = [];

  do {
    const { categories, hasNullCategory, endCursor, hasNextPage } =
      await getCategories(cursor);

    continueSearch = !hasNullCategory && hasNextPage;
    cursor = endCursor;

    allCategories.push(...categories);
  } while (continueSearch);

  return allCategories;
};
