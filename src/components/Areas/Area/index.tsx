import Link from 'next/link';

import { motion, Transition, Variants } from 'framer-motion';

import { BlurImage } from '@components/BlurImage';

import { Service } from '@data/static/services';

import { MainText } from './MainText';
import { TextImage } from './TextImage';

type Props = {
  service: Service;
};

export const Area: React.FC<Props> = ({ service }) => {
  const mainVariants: Variants = {
    initial: {
      height: '105%',
    },
    hover: {
      height: '120%',
    },
  };

  const transition: Transition = {
    type: 'spring',
    stiffness: 500,
    damping: 20,
  };

  return (
    <section className="flex items-center full">
      <motion.div
        variants={mainVariants}
        initial="initial"
        whileHover="hover"
        transition={transition}
        className="w-full font-bold font-title text-neutral text-center tracking-wider uppercase whitespace-pre"
      >
        <Link
          href={service.link}
          className="relative flex flex-col justify-center items-center full"
        >
          <BlurImage
            area-hidden="true"
            src={service.image}
            alt="background image"
            className="object-cover brightness-50 -z-10"
            sizes="(min-width: 768px) 110vw, (min-width: 1024px) 26vw"
            fill
          />

          <div aria-hidden="true" className="child:h-12 mb-4">
            {service.icon}
          </div>

          <MainText service={service} />
          <TextImage service={service} />
        </Link>
      </motion.div>
    </section>
  );
};
