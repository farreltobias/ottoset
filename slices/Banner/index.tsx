import React from 'react';
import Link from 'next/link';

import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { RTHeading1Node } from '@prismicio/types';

import { Caps } from '@components/Texts';

import { classNames } from '@utils/classNames';
import { removeBaseUrl } from '@utils/removeBaseUrl';

import { BannerSlice } from '.slicemachine/prismicio';

type Props = SliceComponentProps<BannerSlice>;

const Banner: React.FC<Props> = ({ slice, index }) => {
  const { background, description, navTo, title } = slice.primary;

  const titleText = (title as RTHeading1Node[])?.reduce(
    (acc: string, { text }) => (acc ? `${acc}\n${text}` : text),
    '',
  );

  const { url } = navTo as { url?: string };

  const link = removeBaseUrl(url);

  const props = link?.includes('http')
    ? { target: '_blank', rel: 'noopener noreferrer', href: link }
    : {};

  if (link) {
    props.href = link;
  }

  const Component = (link ? Link : 'div') as React.ElementType;

  const textImage = [
    'absolute flex items-center justify-center full text-transparent',
    'bg-clip-text bg-cover bg-center brightness-50',
  ];

  const titleSizes =
    'leading-120 text-4xl xs:text-5xl sm:text-7xl lg:text-8xl xl:text-9xl';
  const descriptionSizes =
    'leading-125 text-sm xs:text-xl sm:text-2xl lg:text-3xl';

  return (
    <section
      className={classNames(
        'full shrink-0 grow-0 basis-full font-bold font-title',
        'text-neutral text-center whitespace-pre',
      )}
    >
      <Component {...props} className="relative block h-full overflow-hidden">
        <PrismicNextImage
          priority={index === 0}
          field={background}
          className="object-cover brightness-50"
          sizes="(min-width: 0) 100vw"
          fill
        />

        <div className="relative flex flex-col justify-center items-center h-full">
          <Caps
            aria-hidden="true"
            as="span"
            variant="title"
            className={classNames('pb-20 xs:pb-28', titleSizes, ...textImage)}
            style={{ backgroundImage: `url(${background.url})` }}
          >
            {titleText}
          </Caps>

          <Caps
            as="h1"
            variant="title"
            className={classNames(
              '[-webkit-text-stroke:2px] lg:[-webkit-text-stroke:4px]',
              titleSizes,
            )}
          >
            {titleText}
          </Caps>
          <span
            className={classNames(
              'container mx-auto flex flex-wrap justify-center items-center h-20 xs:h-28',
              'max-w-xs xs:max-w-md sm:max-w-screen-sm lg:max-w-screen-md',
              descriptionSizes,
            )}
          >
            <PrismicRichText
              field={description}
              components={{
                paragraph: ({ children }) => (
                  <p className="flex flex-wrap justify-center items-center gap-x-2 lg:gap-x-4 font-title font-bold">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <span className="text-primary-400 -ml-2 lg:-ml-4">
                    {children}
                  </span>
                ),
              }}
            />
          </span>
        </div>
      </Component>
    </section>
  );
};

export default Banner;
