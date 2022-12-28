import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

import { createClient } from 'prismicio';

import { Overlaid } from '@components/Texts/Overlaid';

import { SEO } from '@seo/faq';

import { PerguntasSlice } from '.slicemachine/prismicio';

const Questions = dynamic(() =>
  import('@components/FAQ/Questions').then(({ Questions }) => Questions),
);

type Items = PerguntasSlice['items'][0] & {
  category: string;
};

export type PerguntasSliceWithCategory = Omit<PerguntasSlice, 'items'> & {
  items: Items[];
};

type PageProps = {
  faq: PerguntasSliceWithCategory;
  categories: string[];
  keyQuestion: string;
};

const FAQ: NextPage<PageProps> = ({ faq, categories, keyQuestion }) => {
  return (
    <article>
      <NextSeo {...SEO({ question: keyQuestion })} />

      <Overlaid className="text-center mt-20">
        <Overlaid.Title>FAQ</Overlaid.Title>
        <Overlaid.SubTitle>Perguntas Frequentes</Overlaid.SubTitle>
      </Overlaid>

      <Questions faq={faq} categories={categories} />
    </article>
  );
};

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

export default FAQ;
