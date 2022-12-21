import React, { useEffect, useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { SliceZone } from '@prismicio/react';
import { RTTextNode } from '@prismicio/types';

import { createClient } from 'prismicio';
import { components } from 'slices';

import { Title } from '@components/Texts';
import { Overlaid } from '@components/Texts/Overlaid';
import { Typeahead } from '@components/Typeahead';

import { SEO } from '@seo/faq';

import { classNames } from '@utils/classNames';

import { PerguntasSlice } from '.slicemachine/prismicio';

type Items = PerguntasSlice['items'][0] & {
  category: string;
};

type PerguntasSliceWithCategory = Omit<PerguntasSlice, 'items'> & {
  items: Items[];
};

type PageProps = {
  faq: PerguntasSliceWithCategory;
  categories: string[];
  keyQuestion: string;
};

const FAQ: NextPage<PageProps> = ({ faq, categories, keyQuestion }) => {
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

        const hasText = text.reduce((acc, { text }) => {
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
    <>
      <NextSeo {...SEO({ question: keyQuestion })} />

      <Overlaid className="text-center mt-20">
        <Overlaid.Title>FAQ</Overlaid.Title>
        <Overlaid.SubTitle>Perguntas Frequentes</Overlaid.SubTitle>
      </Overlaid>

      <section className="relative container mx-auto mt-8">
        <Typeahead
          className="max-w-4xl w-full mx-auto"
          onChange={(value) => setSearch(value.toLowerCase())}
        />

        <aside className="max-w-4xl w-full mx-auto xl:w-fit xl:absolute xl:left-0 mb-12">
          <Title as="h2" variant="h4" className="mb-1">
            Categorias
          </Title>
          <ul className="flex flex-col">
            {categories.map((item) => (
              <li
                key={item}
                className={classNames(
                  'py-1',
                  item === category
                    ? 'text-primary-500 font-bold'
                    : 'text-neutral-900',
                )}
              >
                <button
                  className="outline-none"
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <SliceZone slices={[filteredFAQ]} components={components} />
      </section>
    </>
  );
};

export default FAQ;

export const getStaticProps: GetStaticProps<PageProps> = async ({
  previewData,
}) => {
  const nextClient = createClient({ previewData });

  const faq = await nextClient.getSingle('faq').catch(() => null);

  if (!faq) {
    return {
      notFound: true,
    };
  }

  const categories = [
    'Todos',
    ...faq.data.slices.map(({ primary }) => primary.category as string),
  ];

  const slices = (faq.data.slices as PerguntasSlice[]).reduce(
    (acc: PerguntasSliceWithCategory, item) => {
      return {
        ...acc,
        ...item,
        items: [
          ...acc.items,
          ...item.items.map((texts) => ({
            ...texts,
            category: item.primary.category as string,
          })),
        ],
      };
    },
    { items: [] as Items[] } as PerguntasSliceWithCategory,
  );

  const firstQuestion =
    slices.items.reduce((acc: string | null, item) => {
      if (acc) return acc;

      return item.question.length
        ? item.question.reduce((acc, { text }) => {
            if (acc) return acc;

            return text;
          }, '')
        : acc;
    }, null) || 'O que é a Ottoset Energy?';

  return {
    props: {
      categories,
      faq: slices,
      keyQuestion: faq.data.key_question || firstQuestion,
    },
  };
};
