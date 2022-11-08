import { Children } from 'react';
import Image from 'next/legacy/image';

import Flecha from '@public/navigation/flecha.svg';

import workers from '@public/photos/diferentials-workers.png';
import monitor from '@public/photos/double-monitor.png';

import { Text, Title } from '@components/Texts';

import { diferentials } from '@data/static/content';

export const Diferentials: React.FC = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row mt-12 lg:mt-28">
      <div className="flex flex-col mb-20 lg:w-1/2 lg:text-start lg:mb-0">
        <Title variant="h4" largeVariant="h3" className="text-neutral-900 mb-6">
          Nossos diferenciais
        </Title>
        <ul role="list">
          {Children.toArray(
            diferentials.map((service) => (
              <li className="relative flex mb-4 lg:mb-6 last:mb-0">
                <Flecha
                  className="absolute fill-primary-600 -rotate-90 left-1"
                  width={18}
                  height={24}
                />
                <Text
                  as="span"
                  variant="p2"
                  className="inline ml-9 text-base lg:text-xl"
                >
                  {service}
                </Text>
              </li>
            )),
          )}
        </ul>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="relative w-5/6">
          <Image
            src={workers}
            layout="responsive"
            alt="Office workers"
            placeholder="blur"
          />
          <div className="absolute w-1/2 top-0 right-0 translate-x-1/5 -translate-y-1/5">
            <div className="relative">
              <Image
                src={monitor}
                layout="responsive"
                alt="Concentrated worker"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
