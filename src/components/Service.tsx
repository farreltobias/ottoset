import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { Caps } from '@components/Texts';

type Props = {
  title: string | React.ReactNode;
  image: {
    path: StaticImageData;
    name: string;
  };
  icon?: React.ReactNode;
  link: string;
};

export const Service: React.FC<Props> = ({ title, image, icon, link }) => {
  return (
    <Link href={link}>
      <a className="relative h-96 w-full lg:w-1/4 group">
        <Image
          src={image.path}
          alt={image.name}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          className="group-hover:scale-105 transition-transform"
        />
        <span className="absolute bg-secondary-900 w-full h-full bg-opacity-60 transition-all group-hover:bg-opacity-70" />
        <div className="absolute flex flex-col justify-center items-center h-full w-full">
          <span className="absolute top-1/4 -translate-y-1/2">{icon}</span>
          <Caps
            as="h1"
            variant="title"
            className="w-full flex items-center justify-center text-center text-transparent text-3xl sm:text-5xl lg:text-2xl xl:text-4xl children:leading-120 children:transition-all" //text-xl md:text-3xl
          >
            <span className="shadow-neutral text-stroke-1 group-hover:text-stroke-none group-hover:text-neutral">
              {title}
            </span>
            <span
              className="absolute w-full h-full flex items-center justify-center bg-cover bg-center text-center bg-clip-text group-hover:opacity-0"
              style={{
                backgroundImage: `url(${image.path.src})`,
              }}
            >
              {title}
            </span>
            <span className="absolute bg-secondary-900 bg-opacity-60 bg-clip-text group-hover:opacity-0">
              {title}
            </span>
          </Caps>
        </div>
      </a>
    </Link>
  );
};
