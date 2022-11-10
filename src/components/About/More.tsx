import { Children } from 'react';
import Image from 'next/image';

import Flecha from '@public/navigation/flecha.svg';

import happy from '@public/photos/happy.png';
import workers from '@public/photos/office-workers.png';

import { Text, Title } from '@components/Texts';

import { services } from '@data/static/content';

export const More: React.FC = () => {
  return (
    <section className="container mx-auto flex flex-col-reverse lg:flex-row mt-14 lg:mt-28">
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="relative w-5/6">
          <Image
            src={workers}
            alt="Office workers"
            placeholder="blur"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <div className="absolute w-1/2 top-0 left-0 -translate-x-1/5 -translate-y-1/5">
            <div className="relative">
              <Image
                src={happy}
                alt="Happy worker"
                placeholder="blur"
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-20 lg:w-1/2 lg:text-start lg:mb-0">
        <Title variant="h4" largeVariant="h3" className="text-neutral-900 mb-6">
          Mais de nossos serviços
        </Title>
        <ul role="list">
          {Children.toArray(
            services.map((service) => (
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
    </section>
  );
};
