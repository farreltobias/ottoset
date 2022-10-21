import Image from 'next/image';
import { Children } from 'react';

import { Title } from '@components/Texts';

import { clients } from '@data/clients';

export const Clients: React.FC = () => {
  return (
    <section className="mt-28 lg:mt-40 container mx-auto">
      <Title
        as="h1"
        variant="h3"
        className="text-center mx-auto mb-4 lg:text-8xl lg:leading-120 lg:font-extrabold"
      >
        <span className="block text-neutral shadow-neutral-900 text-stroke-[0.5px] lg:text-stroke-1">
          Nossos
        </span>
        <Title
          as="span"
          variant="h3"
          className="block text-neutral-900 -mt-6 lg:-mt-14 lg:text-7xl lg:leading-120 lg:font-extrabold"
        >
          Clientes
        </Title>
      </Title>

      <div className="w-full flex flex-wrap justify-center">
        {Children.toArray(
          clients.map(({ path, name }) => {
            return (
              <div className="relative w-40 lg:w-60">
                <Image
                  src={path}
                  layout="responsive"
                  alt={name}
                  placeholder="blur"
                />
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};
