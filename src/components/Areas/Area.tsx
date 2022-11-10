import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { Caps } from '@components/Texts';

type Props = {
  title: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  image: StaticImageData;
  icon?: React.ReactNode;
  link: string;
};

export const Area: React.FC<Props> = ({
  title,
  subTitle,
  image,
  icon,
  link,
}) => {
  const fontSizes = 'leading-120 text-3xl sm:text-5xl';

  return (
    <Link
      href={link}
      className="relative text-center overflow-hidden w-full h-full hover:h-[110%] group transition-all bg-cover bg-no-repeat bg-center"
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
        className={`absolute z-20 bottom-0 ${
          subTitle ? 'pt-8' : 'pt-16'
        } flex items-center justify-center w-full h-full text-transparent bg-cover bg-center bg-clip-text brightness-50 transition-all group-hover:opacity-0 whitespace-pre ${fontSizes}`}
        style={{ backgroundImage: `url(${image.src})` }}
      >
        {title}
      </Caps>

      {subTitle && (
        <Caps
          as="span"
          variant="title"
          className={`absolute z-20 bottom-0 pt-36 sm:pt-[10.5rem] flex items-center justify-center w-full h-full text-transparent bg-cover bg-center bg-clip-text brightness-50 transition-all group-hover:opacity-0 whitespace-pre`}
          style={{ backgroundImage: `url(${image.src})` }}
        >
          {subTitle}
        </Caps>
      )}

      <div className="relative flex flex-col justify-center items-center h-full w-full z-10 whitespace-pre">
        <span className="child:h-12 mb-4">{icon}</span>
        <Caps
          as="span"
          variant="title"
          className={`${
            subTitle ? 'mb-2' : ''
          } flex items-center justify-center text-transparent transition-all shadow-neutral text-stroke-[0.5px] lg:text-stroke-1 group-hover:text-stroke-none group-hover:text-neutral ${fontSizes}`}
        >
          {title}
        </Caps>
        {subTitle && (
          <Caps
            as="span"
            variant="title"
            className={`h-6 flex items-center justify-center text-transparent transition-all shadow-neutral text-stroke-[0.5px] lg:text-stroke-1 group-hover:text-stroke-none group-hover:text-neutral`}
          >
            {subTitle}
          </Caps>
        )}
      </div>
    </Link>
  );
};
