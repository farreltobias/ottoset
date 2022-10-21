import Image from 'next/image';
import { Children } from 'react';

import Flecha from '@public/navigation/flecha.svg';
import Badge from '@public/logo/badge.svg';
import Foco from '@public/logo/foco.svg';

import computer from '@public/photos/computer.png';

import { Caps, Title } from '@components/Texts';

import { monitor } from '@data/static/content';

export const Monitor: React.FC = () => {
  return (
    <section className="container mx-auto flex flex-col w-full mt-20 lg:mt-44">
      <Title
        as="h1"
        variant="h3"
        className="text-center mx-auto lg:text-8xl lg:leading-120 lg:font-extrabold"
      >
        <span className="block text-neutral shadow-neutral-900 text-stroke-[0.5px] lg:text-stroke-1">
          Monitoramos
        </span>
        <Title
          as="span"
          variant="h3"
          className="block text-neutral-900 -mt-6 lg:-mt-14 lg:text-7xl lg:leading-120 lg:font-extrabold"
        >
          em tempo real
        </Title>
      </Title>

      <div className="flex flex-col-reverse mt-8 lg:flex-row lg:mt-[4.5rem]">
        <div className="flex items-center justify-center mt-10 lg:mt-0 lg:w-1/2">
          <ul role="list">
            {Children.toArray(
              monitor.map((item) => (
                <li className="relative flex mb-6">
                  <Flecha
                    className="absolute fill-primary-600 -rotate-90 top-1"
                    width={18}
                    height={24}
                    viewBox="0 0 37 48"
                  />
                  <span className="inline ml-8 lg:mx-8 text-base lg:text-xl lg:leading-150">
                    {item}
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="relative w-full">
            <Image
              src={computer}
              layout="responsive"
              alt="computer with monitor"
              placeholder="blur"
            />
            <Caps
              className="absolute bg-primary-50 text-base lg:text-2xl rotate-180 top-0 right-0 h-full flex justify-center px-2 lg:px-4"
              style={{ writingMode: 'vertical-rl' }}
            >
              Por que nos escolher?
            </Caps>
            <div className="absolute top-0 w-[calc(100%-2.5rem)] lg:w-[calc(100%-4.25rem)] h-full">
              <Foco
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6"
                viewBox="0 0 467 471"
              />
              <Badge
                className="absolute child:fill-neutral top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4"
                viewBox="0 0 156 166"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
