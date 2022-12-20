import { Children, useState } from 'react';

import { AnimatePresence, motion, Variants } from 'framer-motion';

import { DisclosureProvider } from '@contexts/DisclosureContext';

import { Answer } from './Answer';
import { Question } from './Question';

type ChildrenType =
  | React.ReactElement<typeof Question>
  | React.ReactElement<typeof Answer>;

type SubComponents = {
  Question: typeof Question;
  Answer: typeof Answer;
};

type Props = {
  className?: string;
  children: ChildrenType | ChildrenType[];
};

const Disclosure: React.FC<Props> & SubComponents = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const keys = Object.keys(Disclosure) as (keyof typeof Disclosure)[];

  const Components = keys.reduce(
    (acc, key) => [
      ...acc,
      ...Children.map(children, (child) => {
        if (child?.type === Disclosure[key]) return child;
      }),
    ],
    [] as React.ReactElement[],
  );

  const Question = Components.find((node) => {
    return node?.type === Disclosure.Question;
  });

  const Answer = Components.find((node) => {
    return node?.type === Disclosure.Answer;
  });

  const colors: Variants = {
    open: {
      color: 'rgb(255 108 10)',
    },
    closed: {
      color: 'rgb(26 26 26)',
    },
  };

  return (
    <DisclosureProvider isOpen={isOpen}>
      <motion.li
        className="mb-6 border border-secondary-400 rounded-lg p-8 pb-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        layout
      >
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center justify-between w-full outline-none pb-8"
          variants={colors}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={{
            color: {
              duration: 0.2,
            },
          }}
        >
          {Question}
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
            >
              {Answer}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.li>
    </DisclosureProvider>
  );
};

Disclosure.Question = Question;
Disclosure.Answer = Answer;

export { Disclosure };
