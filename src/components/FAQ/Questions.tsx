import { useEffect, useState } from 'react';

import { SliceZone } from '@prismicio/react';
import { RTTextNode } from '@prismicio/types';

import { components } from 'slices';

import { Typeahead } from '@components/Typeahead';

import { Aside } from './Aside';

import { PerguntasSliceWithCategory } from '@pages/faq';

type Props = {
  faq: PerguntasSliceWithCategory;
  categories: string[];
};

export const Questions: React.FC<Props> = ({ faq, categories }) => {
  const [filteredFAQ, setFilteredFAQ] = useState(faq);
  const [category, setCategory] = useState('Todos');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const filtered = faq.items.filter((item) => {
      if (category !== 'Todos' && item.category !== category) return false;

      const searchText = search.toLowerCase();
      if (!searchText) return true;

      const textArray = [item.question, item.answer] as RTTextNode[][];

      const hasTextIncluded = textArray.reduce((acc, text) => {
        if (acc) return true;

        const hasText = text.reduce((acc: boolean, { text }) => {
          if (acc) return true;

          return text.toLowerCase().includes(searchText);
        }, false);

        return hasText;
      }, false);

      return hasTextIncluded;
    });

    const newFAQ = {
      ...faq,
      items: filtered,
    };

    setFilteredFAQ(newFAQ);
  }, [category, search, faq]);

  return (
    <div className="relative container mx-auto mt-8">
      <Typeahead
        className="max-w-4xl w-full mx-auto"
        onChange={(value) => setSearch(value.toLowerCase())}
      />

      <Aside
        categories={categories}
        category={category}
        setCategory={setCategory}
      />

      <SliceZone slices={[filteredFAQ]} components={components} />
    </div>
  );
};
