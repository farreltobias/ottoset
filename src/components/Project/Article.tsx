import React from 'react';

import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceZone } from '@prismicio/react';

import { components } from 'slices';

import { Title } from '@components/Texts';

import { Project } from '@utils/convertProject';

type Props = {
  project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
  return (
    <>
      <Title
        largeVariant="h1"
        variant="h3"
        className="mt-8 mb-6 lg:mt-6 lg:mb-10"
        center
      >
        <PrismicRichText field={project.title} />
      </Title>

      <PrismicNextImage
        field={project.cover}
        className="w-full h-auto mb-6 lg:mb-12"
        sizes="100vw"
        priority
      />

      <SliceZone slices={project.slices} components={components} />
    </>
  );
};
