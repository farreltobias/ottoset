import { motion, Transition, Variants } from 'framer-motion';

type Props = {
  isOpen: boolean;
};

const transition: Transition = {
  color: {
    duration: 0.2,
  },
  rotate: {
    type: 'spring',
    stiffness: 500,
    damping: 20,
  },
};

const colors: Variants = {
  open: {
    backgroundColor: 'rgb(255 108 10)',
  },
  closed: {
    backgroundColor: 'rgb(26 26 26)',
  },
};

const rotate: Variants = {
  open: {
    ...colors.open,
    rotate: 0,
  },
  closed: {
    ...colors.closed,
    rotate: 90,
  },
};

export const Icon: React.FC<Props> = ({ isOpen }) => {
  return (
    <span className="relative w-6 h-8 flex items-center">
      <motion.span
        variants={colors}
        className="w-full h-1 absolute rounded-full"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        transition={transition}
      />
      <motion.span
        className="w-full h-1 absolute rounded-full"
        variants={rotate}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        transition={transition}
      />
    </span>
  );
};
