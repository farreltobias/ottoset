import React from 'react';

import { Title } from '@components/Texts';

import { classNames } from '@utils/classNames';

import { List } from './List';

type Props = React.PropsWithChildren<{
  items: string[];
  className?: string;
  TextComponent?: React.FC<{ item: string }>;
}>;

export const Content: React.FC<Props> = ({
  items,
  className = '',
  children,
  TextComponent,
}) => {
  return (
    <div className={classNames('flex flex-col gap-y-6', className)}>
      {children && (
        <Title variant="h4" largeVariant="h3" className="text-neutral-900">
          {children}
        </Title>
      )}

      <List items={items} TextComponent={TextComponent} />
    </div>
  );
};
