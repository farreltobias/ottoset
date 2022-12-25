import React from 'react';

import { Title } from '@components/Texts';

import { List } from './List';

type Props = React.PropsWithChildren<{
  items: string[];
}>;

export const Content: React.FC<Props> = ({ items, children }) => {
  return (
    <>
      <Title variant="h4" largeVariant="h3" className="text-neutral-900">
        {children}
      </Title>

      <List items={items} />
    </>
  );
};
