import React from 'react';
import Link from 'next/link';

import DoubleArrow from '@public/navigation/double-arrow-right.svg';

import { Title } from '@components/Texts';

type Props = {
  title: string;
  link: string;
};

export const Item: React.FC<Props> = ({ title, link }) => {
  return (
    <li className="border-b border-secondary-300">
      <Link
        href={link}
        className="flex justify-between items-center py-5 px-2 lg:py-8 lg:px-10 group"
      >
        <Title variant="h6" largeVariant="h3">
          {title}
        </Title>
        <button
          aria-label={`Abrir o formulário para se candidatar a vaga de ${title}`}
          className="bg-primary-600 rounded items-center justify-center p-1 lg:p-3 group-hover:bg-neutral-900 group-hover:shadow-button group-hover:shadow-primary-600"
        >
          <DoubleArrow className="fill-neutral" />
        </button>
      </Link>
    </li>
  );
};
