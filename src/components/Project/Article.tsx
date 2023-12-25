import React from 'react';

import type { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceZone } from '@prismicio/react';

import { components } from 'slices';

import { Title } from '@components/Texts';

type Props = {
  project: Content.ProjectDocument;
};

export const Article: React.FC<Props> = ({ project: { data } }) => {
  return (
    <>
      <Title
        largeVariant="h1"
        variant="h3"
        className="mt-8 mb-6 lg:mt-6 lg:mb-10"
        center
      >
        <PrismicRichText field={data.title} />
      </Title>

      <PrismicNextImage
        field={data.cover}
        className="w-full h-auto mb-6 lg:mb-12"
        sizes="100vw"
        priority
      />

      <SliceZone slices={data.slices} components={components} />
    </>
  );
};
