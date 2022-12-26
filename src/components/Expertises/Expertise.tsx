import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { motion, Transition, Variants } from 'framer-motion';

import { classNames } from '@utils/classNames';

type Props = {
  title: string | React.ReactNode;
  image: StaticImageData;
  link: string;
};

export const Expertise: React.FC<Props> = ({ title, image, link }) => {
  const mainVariants: Variants = {
    initial: {
      height: '105%',
    },
    hover: {
      height: '120%',
    },
  };

  const textVariants: Variants = {
    initial: {
      WebkitTextStroke: '4px',
    },
    hover: {
      WebkitTextStroke: 0,
    },
  };

  const overTextVariants: Variants = {
    initial: {
      opacity: 1,
    },
    hover: {
      opacity: 0,
    },
  };

  const buttonVariants: Variants = {
    initial: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      color: 'rgba(255, 82, 0, 1)',
      border: '1px solid',
      borderColor: 'rgba(255, 82, 0, 1)',
    },
    hover: {
      backgroundColor: 'rgba(255, 82, 0, 1)',
      color: 'rgba(255, 255, 255, 1)',
      border: 0,
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
    'text-transparent bg-clip-text bg-cover bg-center brightness-50',
  ];

  return (
    <motion.div
      variants={mainVariants}
      initial="initial"
      whileHover="hover"
      transition={transition}
      className="relative full font-bold font-title text-neutral text-center tracking-wider uppercase whitespace-pre"
    >
      <Image
        src={image}
        alt="background image"
        placeholder="blur"
        className="object-cover brightness-50"
        sizes="(min-width: 0) 100vw"
        fill
      />

      <div className="relative flex flex-col justify-center items-center h-full gap-y-4">
        <motion.h1
          variants={textVariants}
          transition={transition}
          className={size}
        >
          {title}
        </motion.h1>

        <motion.span
          aria-hidden="true"
          variants={overTextVariants}
          transition={transition}
          className={classNames('pb-14', size, ...textImage)}
          style={{ backgroundImage: `url(${image.src})` }}
        >
          {title}
        </motion.span>

        <Link href={link} className="transition-all z-30">
          <motion.button
            variants={buttonVariants}
            transition={{ duration: 0.05 }}
            className={classNames(
              'flex items-center h-10 text-lg rounded outline-none px-4 transition-all',
              'hover:!bg-neutral-900 hover:shadow-button hover:shadow-primary-600',
              'hover:!text-neutral hover:!border-none',
            )}
          >
            Solicite orçamento
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};
