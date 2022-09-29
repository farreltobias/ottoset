import Image from 'next/image';
import { Children } from 'react';

import Flecha from '@public/navigation/flecha.svg';
import Badge from '@public/logo/badge.svg';
import Foco from '@public/logo/foco.svg';

import computer from '@public/photos/computer.png';

import { Caps, Title } from '@components/Texts';

import { monitorInformation } from '@utils/monitor';

export const Monitor: React.FC = () => {
  return (
    <section className="container mx-auto flex flex-col w-full mt-44">
      <Title as="h1" variant="display2" className="text-center mx-auto">
        <span className="block text-neutral shadow-neutral-900 text-stroke-1">
          Monitoramos
        </span>
        <Title
          as="span"
          variant="display4"
          className="block -mt-14 text-neutral-900"
        >
          em tempo real
        </Title>
      </Title>

      <div className="flex mt-[4.5rem]">
        <div className="flex items-center justify-center w-1/2">
          <ul role="list">
            {Children.toArray(
              monitorInformation.map((text) => (
                <li className="relative flex mb-6">
                  <Flecha
                    className="absolute fill-primary-600 -rotate-90 top-1"
                    width={18}
                    height={24}
                    viewBox="0 0 37 48"
                  />
                  <span className="inline mx-8 text-xl leading-150">
                    {text}
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <div className="relative w-full">
            <Image
              src={computer}
              layout="responsive"
              alt="computer with monitor"
              placeholder="blur"
            />

            <Caps
              className="absolute bg-primary-50 text-2xl rotate-180 top-0 right-0 h-full flex justify-center px-4"
              style={{ writingMode: 'vertical-rl' }}
            >
              Por que nos escolher?
            </Caps>
            <div className="absolute top-0 w-[calc(100%-4.25rem)] h-full">
              <Foco className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <Badge className="absolute child:fill-neutral top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
