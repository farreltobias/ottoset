import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { Caps, Text, Title } from './Texts';

type Props = {
  img: StaticImageData;
  title: string;
  description: string;
  link: string;
  duration: number;
};

export const Card: React.FC<Props> = ({
  title,
  description,
  duration,
  img,
  link,
}) => {
  const [hours, minutes] = new Date(duration)
    .toISOString()
    .substring(11, 19)
    .split(':')
    .map((time) => Number(time));

  const time = `${hours ? `${hours} h ` : ''}${
    minutes ? `${minutes} min ` : ''
  }de leitura`;

  return (
    <Link href={link}>
      <a className="block relative w-80 h-[40.625rem] lg:w-[35.25rem] lg:h-[47.5rem] group">
        <span className="absolute bg-secondary-900 w-full h-full bg-opacity-60 z-10" />
        <Image
          src={img}
          layout="fill"
          alt="project"
          objectFit="cover"
          placeholder="blur"
        />
        <div className="transition-all opacity-0 group-hover:opacity-100 flex absolute top-0 h-[calc(100%-13.25rem)] w-full items-center justify-center z-10">
          <span className="w-full border-[0.5px] border-neutral-400" />
          <span className="absolute w-11 border-[0.5px] border-neutral" />
          <span className="absolute border border-neutral-400 rounded-full w-[12.5rem] h-[12.5rem]" />
          <Caps
            as="span"
            variant="title"
            className="absolute text-neutral w-11 text-center leading-8"
          >
            Leia Mais
          </Caps>
        </div>
        <div className="w-full min-h-[15.125rem] lg:min-h-[13.25rem] absolute bottom-0 text-neutral z-10 px-7 pb-16 pt-10 lg:pl-9 lg:pr-14 lg:pb-20 transition-all group-hover:bg-secondary-900">
          <Text as="p" variant="p3" className="mb-4">
            {description}
            <span className="mx-2">•</span>
            {time}
          </Text>
          <Title as="h4" variant="h4">
            {title}
          </Title>
        </div>
      </a>
    </Link>
  );
};
