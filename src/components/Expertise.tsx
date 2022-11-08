import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { Caps } from '@components/Texts';

import { Button } from './Button';

type Props = {
  title: string | React.ReactNode;
  image: {
    path: StaticImageData;
    name: string;
  };
  link: string;
};

export const Expertise: React.FC<Props> = ({ title, image, link }) => {
  return (
    <div className="relative h-96 w-full lg:min-w-[37.25rem] group">
      <Image
        src={image.path}
        alt={image.name}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        className="group-hover:scale-105 transition-transform"
      />
      <span className="absolute bg-secondary-900 w-full h-full bg-opacity-60 transition-all group-hover:bg-opacity-70" />

      <Caps
        as="span"
        variant="title"
        className="absolute bottom-0 pb-14 text-3xl sm:text-5xl lg:text-2xl xl:text-4xl z-10 w-full h-full flex items-center justify-center text-transparent bg-cover bg-center text-center bg-clip-text group-hover:opacity-0"
        style={{ backgroundImage: `url(${image.path.src})` }}
      >
        {title}
      </Caps>

      <div className="relative flex flex-col justify-center items-center h-full w-full">
        <Caps
          as="span"
          variant="title"
          className="w-full flex items-center justify-center text-center text-transparent text-3xl sm:text-5xl lg:text-2xl xl:text-4xl children:leading-120 children:transition-all mb-4"
        >
          <span className="shadow-neutral text-stroke-1 group-hover:text-stroke-none group-hover:text-neutral">
            {title}
          </span>
          <span className="absolute z-20 bg-secondary-900 bg-opacity-60 bg-clip-text group-hover:opacity-0">
            {title}
          </span>
        </Caps>
        <Link href={link}>
          <a className="transition-all z-10 group-hover:child:bg-primary-600">
            {/* hidden group-hover:flex */}
            <Button
              variant="outline"
              hover="filled"
              className="h-10 hover:!bg-neutral-900 group-hover:text-neutral group-hover:border-none"
            >
              Solicite orçamento
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};
