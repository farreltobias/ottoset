import Link from 'next/link';

import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText } from '@prismicio/react';
import { RTHeading1Node } from '@prismicio/types';

import { Caps } from '@components/Texts';

import { classNames } from '@utils/classNames';
import { removeBaseUrl } from '@utils/removeBaseUrl';

import { BannerSliceDefaultPrimary } from '.slicemachine/prismicio';

type Props = BannerSliceDefaultPrimary;

export const Slide: React.FC<Props> = ({
  title,
  background,
  description,
  navTo,
}) => {
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

  const titleSizes =
    'leading-120 text-4xl xs:text-5xl sm:text-7xl lg:text-8xl xl:text-9xl';
  const descriptionSizes =
    'leading-125 text-sm xs:text-xl sm:text-2xl lg:text-3xl';

  return (
    <Component
      {...props}
      className="relative block text-center overflow-hidden w-full h-full bg-cover bg-no-repeat bg-center"
    >
      <PrismicNextImage
        field={background}
        className="object-cover brightness-50"
        sizes="100vw"
        fill
      />
      <Caps
        as="span"
        variant="title"
        className={classNames(
          'absolute z-20 bottom-0 pb-20 xs:pb-28 flex items-center justify-center w-full h-full text-transparent bg-cover bg-center bg-clip-text brightness-50 whitespace-pre',
          titleSizes,
        )}
        style={{ backgroundImage: `url(${background.url})` }}
      >
        {titleText}
      </Caps>

      <div className="relative flex flex-col justify-center items-center h-full w-full z-10">
        <Caps
          as="span"
          variant="title"
          className={classNames(
            'flex items-center justify-center text-transparent shadow-neutral text-stroke-[0.5px] lg:text-stroke-1 whitespace-pre',
            titleSizes,
          )}
        >
          {titleText}
        </Caps>
        <span
          className={classNames(
            'container mx-auto h-20 xs:h-28 flex flex-wrap justify-center items-center max-w-xs xs:max-w-md sm:max-w-screen-sm lg:max-w-screen-md text-neutral text-center',
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
  );
};
