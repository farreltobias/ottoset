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
      <Link href={link}>
        <a className="flex justify-between items-center py-5 px-2 lg:py-8 lg:px-10 group">
          <Title variant="h6" className="lg:text-[2rem] lg:leading-125">
            {title}
          </Title>
          <button className="bg-primary-600 rounded items-center justify-center p-1 lg:p-3 group-hover:bg-neutral-900 group-hover:shadow-button group-hover:shadow-primary-600">
            <DoubleArrow className="fill-neutral" />
          </button>
        </a>
      </Link>
    </li>
  );
};
