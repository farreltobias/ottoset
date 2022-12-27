import { Children } from 'react';

import Flecha from '@public/icons/next.svg';

import { Text } from '@components/Texts';

type Props = {
  items: string[];
  TextComponent?: React.FC<{ item: string }>;
};

export const List: React.FC<Props> = ({ items, TextComponent }) => {
  const ListItem: React.FC<{ item: string }> = ({ item }) => {
    return TextComponent ? (
      <TextComponent item={item} />
    ) : (
      <Text variant="p2" className="lg:text-xl">
        {item}
      </Text>
    );
  };

  return (
    <ul className="flex flex-col gap-y-4 lg:gap-y-6">
      {Children.toArray(
        items.map((item) => (
          <li className="flex gap-x-4">
            <Flecha
              aria-hidden="true"
              className="fill-primary-600 grow-0 shrink-0 basis-6 h-[1.125rem] mt-1"
            />
            <ListItem item={item} />
          </li>
        )),
      )}
    </ul>
  );
};
