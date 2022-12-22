import React from 'react';
import Link from 'next/link';

import { PrismicText } from '@prismicio/react';
import { RTHeading1Node } from '@prismicio/types';

import DoubleArrow from '@public/navigation/double-arrow-right.svg';

import { Title } from '@components/Texts';

import { CareerDocument } from '.slicemachine/prismicio';

export type CustomCareerDocument = {
  data: {
    title: [] | [RTHeading1Node, ...RTHeading1Node[]];
  };
} & Omit<CareerDocument<string>, 'data'>;

type Props = {
  slug: string;
} & CustomCareerDocument['data'];

export const Item: React.FC<Props> = ({ title, slug }) => {
  return (
    <li className="border-b border-secondary-300">
      <Link
        href={{
          pathname: '/carreiras/[slug]',
          query: { slug },
        }}
        className="flex justify-between items-center py-5 px-2 lg:py-8 lg:px-10 group"
      >
        <Title variant="h6" largeVariant="h3">
          <PrismicText field={title} />
        </Title>
        <button
          aria-label={`Abrir o formulário para se candidatar a vaga${
            title[0] ? ` de ${title[0].text}` : ''
          }`}
          className="bg-primary-600 rounded items-center justify-center p-1 lg:p-3 group-hover:bg-neutral-900 group-hover:shadow-button group-hover:shadow-primary-600"
        >
          <DoubleArrow className="fill-neutral" />
        </button>
      </Link>
    </li>
  );
};
