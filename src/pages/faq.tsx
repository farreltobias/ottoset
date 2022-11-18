import React, { Children, useEffect, useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { motion } from 'framer-motion';

import { Button } from '@components/Button';
import { Disclosure } from '@components/FAQ/Disclosure';
import { Title } from '@components/Texts';
import { Overlaid } from '@components/Texts/Overlaid';
import { Typeahead } from '@components/Typeahead';

import { SEO } from '@seo/faq';

import { categories, faq } from '@data/static/faq';

const FAQ: NextPage = () => {
  const [filteredFAQ, setFilteredFAQ] = useState(faq);
  const [category, setCategory] = useState('Todos');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const filtered = faq.filter((item) => {
      const question = item.question.toLowerCase();
      const answer = item.answer.toLowerCase();

      return (
        (question.includes(search) || answer.includes(search)) &&
        (category === 'Todos' || item.category === category)
      );
    });

    setFilteredFAQ(filtered);
  }, [category, search]);

  return (
    <>
      <NextSeo {...SEO(faq[0])} />

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
            {Children.toArray(
              categories.map((value) => (
                <li
                  className={`py-1 ${
                    value === category
                      ? 'text-primary-500 font-bold'
                      : 'text-neutral-900'
                  }`}
                >
                  <button
                    className="outline-none"
                    onClick={() => setCategory(value)}
                  >
                    {value}
                  </button>
                </li>
              )),
            )}
          </ul>
        </aside>

        <motion.ul className="flex flex-col max-w-4xl w-full mx-auto mb-48">
          {/* <AnimatePresence mode="wait"> */}
          {filteredFAQ.length ? (
            filteredFAQ.map(({ question, answer }) => (
              <Disclosure key={question}>
                <Disclosure.Question>{question}</Disclosure.Question>
                <Disclosure.Answer>{answer}</Disclosure.Answer>
              </Disclosure>
            ))
          ) : (
            <motion.li
              className="flex flex-col items-center my-10"
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
            >
              <Title as="span" variant="h3" className="text-center mb-4">
                Nenhuma pergunta encontrada
              </Title>
              <Button>
                <Link href="contato">Fale conosco</Link>
              </Button>
            </motion.li>
          )}
          {/* </AnimatePresence> */}
        </motion.ul>
      </section>
    </>
  );
};

export default FAQ;
