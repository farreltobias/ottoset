import { Children } from 'react';
import Image from 'next/image';

import Badge from '@public/company/badge.svg';
import Foco from '@public/company/foco.svg';
import Flecha from '@public/navigation/flecha.svg';

import computer from '@public/photos/computer.png';

import { Caps } from '@components/Texts';
import { Overlaid } from '@components/Texts/Overlaid';

import { monitor } from '@data/static/content';

export const Monitor: React.FC = () => {
  return (
    <section className="container mx-auto flex flex-col w-full mt-20 lg:mt-44">
      <Overlaid className="text-center">
        <Overlaid.Title>Monitoramos</Overlaid.Title>
        <Overlaid.SubTitle>em tempo real</Overlaid.SubTitle>
      </Overlaid>

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
                  />
                  <span className="inline ml-8 lg:mx-8 text-base lg:text-xl lg:leading-150">
                    {item}
                  </span>
                </li>
              )),
            )}
          </ul>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <div className="relative w-full">
            <Image
              src={computer}
              alt="computer with monitor"
              placeholder="blur"
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            <Caps className="absolute bg-primary-50 text-base lg:text-2xl rotate-180 top-0 right-0 h-full flex justify-center px-2 lg:px-4 [writing-mode:vertical-rl]">
              Por que nos escolher?
            </Caps>
            <div className="absolute top-0 w-[calc(100%-2.5rem)] lg:w-[calc(100%-4.25rem)] h-full">
              <Foco className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6" />
              <Badge className="absolute child:fill-neutral top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
