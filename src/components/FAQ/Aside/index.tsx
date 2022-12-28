import { Dispatch, SetStateAction } from 'react';

import { Title } from '@components/Texts';

import { Item } from './Item';

type Props = {
  categories: string[];
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};

export const Aside: React.FC<Props> = ({
  categories,
  category,
  setCategory,
}) => {
  return (
    <aside className="max-w-4xl w-full mx-auto xl:w-fit xl:absolute xl:left-0 mb-12">
      <Title as="h2" variant="h4" className="mb-1">
        Categorias
      </Title>

      <ul className="flex flex-col">
        {categories.map((item) => (
          <Item
            key={item}
            item={item}
            category={category}
            setCategory={setCategory}
          />
        ))}
      </ul>
    </aside>
  );
};
