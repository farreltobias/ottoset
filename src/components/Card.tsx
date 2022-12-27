import Link from 'next/link';

import { PrismicText } from '@prismicio/react';

import { motion } from 'framer-motion';

import { convertTime } from '@utils/convertTime';
import { getDurationFromSlices } from '@utils/getDurationFromSlices';

import { PrismicBlurImage } from './BlurImage';
import { Caps, Text, Title } from './Texts';
import { ProjectDocument } from '.slicemachine/prismicio';

type Props = {
  className?: string;
  project: ProjectDocument;
};

const listVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const readMoreVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1 },
};

const contentVariants = {
  initial: { backgroundColor: 'rgba(26,26,26,0)' },
  hover: { backgroundColor: 'rgba(26,26,26,1)' },
};

export const Card: React.FC<Props> = ({
  project: {
    data: { title, cover, description, slices },
    uid: slug,
  },
  className = 'list-none w-80 lg:w-[35rem] h-[40.625rem] lg:h-[47.5rem]',
}) => {
  const duration = getDurationFromSlices(slices);
  const formatedTime = convertTime(duration);

  return (
    <motion.li
      className={className}
      variants={listVariants}
      initial="initial"
      whileHover="hover"
      animate="animate"
      exit="exit"
    >
      <article className="relative group bg-cover bg-center backdrop-brightness-50 h-full overflow-hidden">
        <PrismicBlurImage
          field={cover}
          className="object-cover brightness-50 -z-10"
          sizes="(min-width: 768px) 50vw, (min-width: 1024px) 35vw, 100vw"
          fill
        />
        <Link
          href={{
            pathname: '/projetos/[slug]',
            query: { slug },
          }}
        >
          <motion.header
            variants={readMoreVariants}
            transition={{ duration: 0.2 }}
            className="flex absolute top-0 h-[calc(100%-13.25rem)] w-full items-center justify-center z-10"
          >
            <div className="w-full border-[0.5px] border-neutral-400" />
            <div className="absolute flex items-center justify-center border border-neutral-400 rounded-full w-[12.5rem] h-[12.5rem]">
              <Caps
                as="p"
                variant="title"
                className="absolute flex flex-col items-center justify-center text-neutral w-11 text-center"
              >
                Leia
                <span className="w-11 my-1 border-[0.5px] border-neutral" />
                Mais
              </Caps>
            </div>
          </motion.header>

          <motion.div
            variants={contentVariants}
            transition={{ duration: 0.15 }}
            className="flex flex-col w-full min-h-[15.125rem] lg:min-h-[13.25rem] absolute bottom-0 text-neutral z-10 px-7 pb-16 pt-10 lg:pl-9 lg:pr-14 lg:pb-20"
          >
            <Title as="h2" variant="h4" className="order-2">
              <PrismicText field={title} />
            </Title>
            <Text as="p" variant="p3" className="mb-4 order-1">
              <PrismicText field={description} />
              <span className="mx-2">•</span>
              {formatedTime}
            </Text>
          </motion.div>
        </Link>
      </article>
    </motion.li>
  );
};
