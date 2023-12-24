import { useState } from 'react';
import Image from 'next/image';

import Play from '@public/icons/play.svg';

import ottoset from '@public/photos/video.png';

import { Caps } from '@components/Texts';

import { Modal } from './Modal';

export const Video: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full lg:w-1/4 h-[27.5vh] lg:absolute bottom-0 transition-transform right-0 lg:translate-x-full lg:hover:translate-x-0">
      <Caps
        as="span"
        variant="title"
        className="absolute text-[2rem] flex justify-center bg-primary-50 rotate-180 left-0 lg:-translate-x-full h-full px-3 [writing-mode:vertical-rl] z-10"
      >
        A Ottoset
      </Caps>
      <Image
        src={ottoset}
        alt="ottoset"
        placeholder="blur"
        className="object-cover object-center -z-10"
        sizes="100vw"
        fill
      />
      <button
        aria-label="Abrir vídeo sobre a Ottoset"
        onClick={() => setIsOpen(true)}
        className="h-full w-full"
      >
        <span className="flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border p-4 border-neutral">
          <span className="animate-ping h-2/3 w-2/3 border-4 border-neutral absolute rounded-full opacity-75" />
          <Play className="pl-2 w-9 h-9" />
        </span>
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
