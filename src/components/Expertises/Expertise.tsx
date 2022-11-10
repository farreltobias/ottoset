import { StaticImageData } from 'next/image';
import Link from 'next/link';

import { Button } from '@components/Button';
import { Caps } from '@components/Texts';

type Props = {
  title: string | React.ReactNode;
  image: StaticImageData;
  link: string;
};

export const Expertise: React.FC<Props> = ({ title, image, link }) => {
  const fontSizes = 'leading-120 text-3xl sm:text-5xl';

  return (
    <div
      className="relative w-full h-full hover:h-[110%] group transition-all bg-cover bg-no-repeat bg-center after:content-[''] after:bg-neutral-900 after:bg-opacity-60 after:absolute after:inset-0"
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <Caps
        as="span"
        variant="title"
        className={`absolute z-20 bottom-0 flex items-center justify-center w-full h-full pb-14 text-transparent bg-cover bg-center bg-clip-text group-hover:opacity-0 brightness-[47.5%] transition-all whitespace-pre ${fontSizes}`}
        style={{ backgroundImage: `url(${image.src})` }}
      >
        {title}
      </Caps>

      <div className="relative flex flex-col justify-center items-center h-full w-full">
        <Caps
          as="span"
          variant="title"
          className={`flex items-center justify-center text-transparent mb-4 z-10 transition-all shadow-neutral text-stroke-[0.5px] lg:text-stroke-1 group-hover:text-stroke-none group-hover:text-neutral whitespace-pre ${fontSizes}`}
        >
          {title}
        </Caps>
        <Link href={link} className="transition-all z-30">
          <Button
            variant="outline"
            hover="filled"
            className="h-10 group-hover:bg-primary-600 hover:!bg-neutral-900 group-hover:text-neutral group-hover:border-none"
          >
            Solicite orçamento
          </Button>
        </Link>
      </div>
    </div>
  );
};
