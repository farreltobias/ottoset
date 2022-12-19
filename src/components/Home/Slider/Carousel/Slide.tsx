import { Children } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { Caps } from '@components/Texts';

import { classNames } from '@utils/classNames';

type Props = {
  title: string;
  image: StaticImageData;
  description: string[];
  link: string;
};

export const Slide: React.FC<Props> = ({ title, image, description, link }) => {
  const titleSizes =
    'leading-120 text-4xl xs:text-5xl sm:text-7xl lg:text-8xl xl:text-9xl';
  const descriptionSizes =
    'leading-125 text-sm xs:text-xl sm:text-2xl lg:text-3xl';

  return (
    <Link
      href={link}
      className="relative block text-center overflow-hidden w-full h-full bg-cover bg-no-repeat bg-center"
    >
      <Image
        src={image}
        alt="background image"
        placeholder="blur"
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
        style={{ backgroundImage: `url(${image.src})` }}
      >
        {title}
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
          {title}
        </Caps>
        <span
          className={classNames(
            'container mx-auto h-20 xs:h-28 flex flex-wrap justify-center items-center max-w-xs xs:max-w-md sm:max-w-screen-sm lg:max-w-screen-md text-neutral text-center',
            descriptionSizes,
          )}
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
