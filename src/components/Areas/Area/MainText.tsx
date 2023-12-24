import React from 'react';

import { motion, Transition, Variants } from 'framer-motion';

import { Service } from '@data/static/services';

type Props = {
  service: Service;
};

export const MainText: React.FC<Props> = ({ service }) => {
  const textVariants: Variants = {
    initial: {
      WebkitTextStroke: '4px',
    },
    hover: {
      WebkitTextStroke: 0,
    },
  };

  const subTextVariants: Variants = {
    ...textVariants,
    initial: { WebkitTextStroke: '2px' },
  };

  const transition: Transition = {
    type: 'spring',
    stiffness: 500,
    damping: 20,
  };

  const size = 'leading-120 text-3xl sm:text-5xl';

  return (
    <div className="flex flex-col gap-y-2">
      <motion.h1
        variants={textVariants}
        transition={transition}
        className={size}
      >
        {service.title}
      </motion.h1>

      {service.subTitle && (
        <motion.h2 variants={subTextVariants} transition={transition}>
          {service.subTitle}
        </motion.h2>
      )}
    </div>
  );
};
