import { Children } from 'react';
import Image from 'next/legacy/image';

import { Overlaid } from '@components/Texts/Overlaid';

import { clients } from '@data/clients';

export const Clients: React.FC = () => {
  return (
    <section className="mt-28 lg:mt-40 container mx-auto">
      <Overlaid className="text-center">
        <Overlaid.Title>Nossos</Overlaid.Title>
        <Overlaid.SubTitle>Clientes</Overlaid.SubTitle>
      </Overlaid>

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
          }),
        )}
      </div>
    </section>
  );
};
