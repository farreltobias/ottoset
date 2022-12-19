import { Content } from '@prismicio/client';

import { Maybe } from 'graphql/jsutils/Maybe';
import { ProjectConnectionEdge } from 'src/types/generated/graphql';

import { convertSlice } from './convertSlice';

export type Project = {
  slug: string;
  cursor?: string;
} & Content.ProjectDocumentData;

export const convertProject = (
  project: Maybe<ProjectConnectionEdge>,
): Project | null => {
  const { node, cursor } = project || {};

  const {
    title,
    description,
    cover,
    _meta,
    slices: defaultSlices,
    category,
  } = node || {};

  if (!title || !description || !cover || !_meta?.uid) {
    return null;
  }

  const slices = (defaultSlices || []).map(
    convertSlice,
  ) as Content.ProjectDocumentData['slices'];

  return {
    title,
    description,
    cover,
    slices,
    category: category || null,
    slug: _meta.uid,
    cursor,
  };
};
