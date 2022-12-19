import { Content } from '@prismicio/client';

import { ProjectSlicesArtigo } from 'src/types/generated/graphql';
import { v4 as uuid } from 'uuid';

import { ArtigoSliceDefaultItem, Simplify } from '.slicemachine/prismicio';

export const convertSlice = ({
  variation,
  label = null,
  type = 'artigo',
}: ProjectSlicesArtigo): Content.ArtigoSlice => {
  const items: Simplify<ArtigoSliceDefaultItem>[] =
    variation?.items?.map(({ paragraph }) => ({
      paragraph: paragraph || [],
    })) || [];

  const { title, image } = variation?.primary || {};

  return {
    variation: 'default',
    version: '',
    items,
    primary: {
      title: title || [],
      image: image || [],
    },
    id: `${type}$${uuid()}`,
    slice_type: type as 'artigo',
    slice_label: label as null,
  };
};
