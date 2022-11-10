import { Children } from 'react';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

import { Caps } from '@components/Texts';

type Props = {
  title: string;
  subTitle?: string;
  image: StaticImageData;
  description: string[];
  link: string;
};

export const Slide: React.FC<Props> = ({
  title,
  image,
  description,
  link,
  subTitle,
}) => {
  const titleSizes =
    'leading-120 text-4xl xs:text-5xl sm:text-7xl lg:text-8xl xl:text-9xl';
  const subTitleSizes =
    'leading-120 text-base xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl';
  const descriptionSizes =
    'leading-125 text-sm xs:text-xl sm:text-2xl lg:text-3xl';

  return (
    <Link
      href={link}
      className="relative block text-center overflow-hidden w-full h-full bg-cover bg-no-repeat bg-center after:content-[''] after:bg-neutral-900 after:bg-opacity-60 after:absolute after:inset-0"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <Caps
        as="span"
        variant="title"
        className={`absolute z-20 bottom-0 ${
          subTitle ? 'pb-[8.5rem] xs:pb-[10.5rem] sm:pb-44' : 'pb-20 xs:pb-28'
        } flex items-center justify-center w-full h-full text-transparent bg-cover bg-center bg-clip-text brightness-[47.5%] whitespace-pre ${titleSizes}`}
        style={{ backgroundImage: `url(${image.src})` }}
      >
        {title}
      </Caps>

      {subTitle && (
        <Caps
          as="span"
          variant="title"
          className={`pt-[0.375rem] xs:pt-0 xs:pb-4 sm:pb-0 sm:pt-8 lg:pt-20 xl:pt-36 absolute z-20 bottom-0 flex items-center justify-center w-full h-full text-transparent bg-cover bg-center bg-clip-text brightness-[47.5%] whitespace-pre ${subTitleSizes}`}
          style={{ backgroundImage: `url(${image.src})` }}
        >
          {subTitle}
        </Caps>
      )}

      <div className="relative flex flex-col justify-center items-center h-full w-full z-10">
        <Caps
          as="span"
          variant="title"
          className={`${
            subTitle ? 'mb-2' : ''
          } flex items-center justify-center text-transparent shadow-neutral text-stroke-[0.5px] lg:text-stroke-1 whitespace-pre ${titleSizes}`}
        >
          {title}
        </Caps>
        {subTitle && (
          <Caps
            as="span"
            variant="title"
            className={`h-10 sm:h-12 mb-2 flex items-center justify-center text-transparent shadow-neutral text-stroke-[0.5px] lg:text-stroke-1 whitespace-pre ${subTitleSizes}`}
          >
            {subTitle}
          </Caps>
        )}
        <span
          className={`container mx-auto h-20 xs:h-28 flex flex-wrap justify-center items-center max-w-xs xs:max-w-md sm:max-w-screen-sm lg:max-w-screen-md text-neutral text-center ${descriptionSizes}`}
        >
          <span className="flex flex-wrap justify-center items-center">
            {Children.toArray(
              description.map((text) => (
                <span className="font-title font-bold pr-2 whitespace-pre lg:pr-4">
                  {text}
                  <span className="text-primary-400">.</span>
                </span>
              )),
            )}
          </span>
        </span>
      </div>
    </Link>
  );
};

/*
  <div className="relative h-full w-full">
      <Image
        src={image}
        alt={''}
        placeholder="blur"
        className="object-cover"
        sizes="100vw"
        fill
      />
      <span className="absolute bg-secondary-900 w-full h-full bg-opacity-60" />
      <div className="absolute flex flex-col justify-center items-center h-full w-full">
        <Caps
          ref={titleRef}
          as="h1"
          variant="title"
          className="w-full flex items-center justify-center text-center text-transparent text-3xl sm:text-7xl md:text-8xl children:leading-120"
        >
          <span
            className="shadow-neutral text-stroke-1 lg:text-stroke-2"
            style={{ paddingBottom: height / 2 }}
          >
            {title}
          </span>
          <span
            className="absolute w-full h-full flex items-center justify-center bg-cover bg-center text-center bg-clip-text"
            style={{
              paddingBottom: height / 2,
              backgroundImage: `url(${image.src})`,
            }}
          >
            {title}
          </span>
          <span
            className="absolute bg-secondary-900 bg-opacity-60 bg-clip-text"
            style={{ paddingBottom: height / 2 }}
          >
            {title}
          </span>
          </Caps>
          <Title
            ref={ref}
            variant="h6"
            smallVariant="h4"
            as="span"
            className="container mx-auto absolute flex flex-wrap justify-center items-center text-neutral text-center whitespace-pre md:text-3xl lg:leading-125 lg:px-40 xl:px-64"
            style={{ paddingTop: titleHeight / 2 + 24 }}
          >
            {Children.toArray(
              description.map((text) => (
                <span className="pr-2 lg:pr-4">
                  {text}
                  <span className="text-primary-400">.</span>
                </span>
              )),
            )}
          </Title>
        </div>
      </div>
*/
