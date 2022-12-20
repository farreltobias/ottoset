import React from 'react';
import Link from 'next/link';

import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from '@prismicio/react';

import { AnimatePresence, motion } from 'framer-motion';

import { Button } from '@components/Button';
import { Disclosure } from '@components/FAQ/Disclosure';
import { Title } from '@components/Texts';

import { PerguntasSlice } from '.slicemachine/prismicio';

export type PerguntasProps = SliceComponentProps<PerguntasSlice>;

const Perguntas: React.FC<PerguntasProps> = ({ slice: { items } }) => (
  <ul className="flex flex-col max-w-4xl w-full mx-auto mb-48">
    <AnimatePresence>
      {items.length ? (
        items.map(({ answer, question }) => {
          return (
            <Disclosure key={question[0]?.text}>
              <Disclosure.Question>
                <PrismicText field={question} />
              </Disclosure.Question>

              <Disclosure.Answer>
                <PrismicRichText field={answer} />
              </Disclosure.Answer>
            </Disclosure>
          );
        })
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
            <Link href="/contato">Fale conosco</Link>
          </Button>
        </motion.li>
      )}
    </AnimatePresence>
  </ul>
);

export default Perguntas;
