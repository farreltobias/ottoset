import React from 'react';

import { motion, Transition, Variants } from 'framer-motion';

import { Service } from '@data/static/services';

import { classNames } from '@utils/classNames';

type Props = {
  service: Service;
};

export const TextImage: React.FC<Props> = ({ service }) => {
  const overTextVariants: Variants = {
    initial: {
      opacity: 1,
    },
    hover: {
      opacity: 0,
    },
  };

  const transition: Transition = {
    type: 'spring',
    stiffness: 500,
    damping: 20,
  };

  const size = 'leading-120 text-3xl sm:text-5xl';
  const textImage = [
    'absolute flex items-center justify-center full',
    'text-transparent bg-clip-text bg-cover bg-center  brightness-50',
  ];

  return (
    <>
      <motion.span
        aria-hidden="true"
        variants={overTextVariants}
        transition={transition}
        className={classNames(
          service.subTitle ? 'pt-8' : 'pt-16',
          size,
          ...textImage,
        )}
        style={{ backgroundImage: `url(${service.image.src})` }}
      >
        {service.title}
      </motion.span>

      {service.subTitle && (
        <motion.span
          aria-hidden="true"
          variants={overTextVariants}
          transition={transition}
          className={classNames('pt-36 sm:pt-[10.5rem]', ...textImage)}
          style={{ backgroundImage: `url(${service.image.src})` }}
        >
          {service.subTitle}
        </motion.span>
      )}
    </>
  );
};
