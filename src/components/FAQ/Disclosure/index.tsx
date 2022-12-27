import { useState } from 'react';

import { AnimatePresence, motion, Variants } from 'framer-motion';

import { DisclosureProvider } from '@contexts/DisclosureContext';

import { ChildrenType, getSubComponents } from '@utils/getSubComponents';

import { Answer } from './Answer';
import { Question } from './Question';

type SubComponents = {
  Question: typeof Question;
  Answer: typeof Answer;
};

type Props = {
  className?: string;
  children: ChildrenType<SubComponents> | ChildrenType<SubComponents>[];
};

const Disclosure: React.FC<Props> & SubComponents = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { Question, Answer } = getSubComponents<SubComponents>({
    children,
    FC: Disclosure,
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
          {Question.component}
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{
                height: 'auto',
                transition: {
                  type: 'spring',
                  stiffness: 500,
                  damping: 20,
                },
              }}
              exit={{
                height: 0,
                transition: {
                  type: 'spring',
                  stiffness: 500,
                  damping: 50,
                },
              }}
            >
              {Answer.component}
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
