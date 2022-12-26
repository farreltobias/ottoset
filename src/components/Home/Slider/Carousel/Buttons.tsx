import { motion, Transition, Variants } from 'framer-motion';

import Next from '@public/icons/next.svg';
import Prev from '@public/icons/prev.svg';

import { Text } from '@components/Texts';

const transition: Transition = {
  type: 'spring',
  stiffness: 500,
  damping: 20,
};

const variants: Variants = {
  initial: {
    opacity: 0,
    display: 'none',
  },
  animate: {
    opacity: 1,
    display: 'flex',
  },
  exit: {
    opacity: 0,
    display: 'none',
  },
};

type Props = {
  enabled: boolean;
  onClick: () => void;
  total: number;
  current: number;
};

export const PrevButton: React.FC<Props> = ({
  enabled,
  onClick,
  total,
  current,
}) => (
  <motion.div
    variants={variants}
    transition={transition}
    initial="initial"
    animate={enabled ? 'animate' : 'exit'}
    exit="exit"
    className="absolute flex items-center top-10 lg:top-1/2 translate-x-2 lg:-translate-y-1/2 gap-2 lg:gap-6 text-neutral"
  >
    <button
      aria-label="Ver projeto anterior"
      className="flex justify-center outline-none"
      onClick={onClick}
      disabled={!enabled}
    >
      <Prev className="w-2/3 lg:w-full" />
    </button>
    <motion.span
      variants={variants}
      transition={transition}
      initial="initial"
      animate={current + 1 === total ? 'animate' : 'exit'}
      exit="exit"
    >
      <Text variant="p2" largeVariant="p1" as="span">
        {current + 1} / {total}
      </Text>
    </motion.span>
  </motion.div>
);

export const NextButton: React.FC<Props> = ({
  enabled,
  onClick,
  total,
  current,
}) => (
  <motion.div
    variants={variants}
    transition={transition}
    initial="initial"
    animate={enabled ? 'animate' : 'exit'}
    exit="exit"
    className="absolute flex flex-row-reverse items-center right-0 top-10 lg:top-1/2 -translate-x-2 lg:-translate-y-1/2 gap-2 lg:gap-6 text-neutral"
  >
    <button
      aria-label="Ver próximo projeto"
      className="flex justify-center outline-none"
      onClick={onClick}
      disabled={!enabled}
    >
      <Next className="w-2/3 lg:w-full" />
    </button>
    <Text variant="p2" largeVariant="p1" as="span">
      {current + 1} / {total}
    </Text>
  </motion.div>
);
