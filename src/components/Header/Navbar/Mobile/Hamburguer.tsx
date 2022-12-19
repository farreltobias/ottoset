import { useContext } from 'react';

import { motion, Transition, Variants } from 'framer-motion';

import { SidebarContext } from '@contexts/SidebarContext';

const variants: Variants = {
  open: {
    backgroundColor: 'rgb(255,255,255)',
  },
  closed: {
    backgroundColor: 'rgb(26,26,26)',
  },
};

const topVariants: Variants = {
  open: {
    rotate: 45,
    marginBottom: 13,
    ...variants.open,
  },
  closed: {
    rotate: 0,
    marginBottom: 4,
    ...variants.closed,
  },
};

const middleVariants: Variants = {
  open: {
    height: 0,
    ...variants.open,
  },
  closed: {
    height: 4,
    ...variants.closed,
  },
};

const bottomVariants: Variants = {
  open: {
    rotate: -45,
    ...variants.open,
  },
  closed: {
    rotate: 0,
    ...variants.closed,
  },
};

const transition: Transition = {
  backgroundColor: { duration: 0.2 },
  rotate: { type: 'spring', stiffness: 500, damping: 20 },
  marginBottom: { duration: 0.2 },
  height: { duration: 0.15 },
};

export const Hamburguer: React.FC = () => {
  const { show, setShow } = useContext(SidebarContext);

  return (
    <button
      onClick={() => {
        document.body.classList.toggle('overflow-hidden');
        setShow(!show);
      }}
      className="flex lg:hidden z-20 flex-col items-center justify-center"
    >
      <motion.div
        className="w-8 h-1 origin-top-left"
        transition={transition}
        variants={topVariants}
        initial="closed"
        animate={show ? 'open' : 'closed'}
      />
      <motion.div
        className="w-8 mb-1 bg-neutral-900"
        transition={transition}
        variants={middleVariants}
        initial="closed"
        animate={show ? 'open' : 'closed'}
      />
      <motion.div
        className="w-8 h-1 origin-bottom-left"
        transition={transition}
        variants={bottomVariants}
        initial="closed"
        animate={show ? 'open' : 'closed'}
      />
    </button>
  );
};
