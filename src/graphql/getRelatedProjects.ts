import { DocumentNode } from 'graphql';
import { client } from 'prismicio';

import { RelatedProjectType } from '@components/Project/Footer/Button';

import { AllProjectsQuery } from './types';

type RelatedProjectProps = {
  cursor: string;
  query: DocumentNode;
};

export const getRelatedProjects = async ({
  cursor,
  query,
}: RelatedProjectProps): Promise<RelatedProjectType> => {
  const {
    data: {
      allProjects: { edges },
    },
  } = await client.query<AllProjectsQuery>({
    query,
    variables: {
      cursor,
    },
  });

  return {
    slug: edges?.[0]?.node?._meta?.uid || null,
    cursor: edges?.[0]?.cursor || null,
  };
};
