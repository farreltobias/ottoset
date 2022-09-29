import Image from 'next/image';
import { Children } from 'react';

import { Title } from '@components/Texts';

import { clientImages } from '@utils/clientImages';

export const Clients: React.FC = () => {
  return (
    <section className="mt-40 container mx-auto">
      <Title as="h1" variant="display2" className="text-center mx-auto mb-4">
        <span className="block text-neutral shadow-neutral-900 text-stroke-1">
          Nossos
        </span>
        <Title
          as="span"
          variant="display2"
          className="block -mt-14 text-neutral-900"
        >
          Clientes
        </Title>
      </Title>

      <div className="w-full flex flex-wrap justify-center">
        {Children.toArray(
          clientImages.map(({ path, name }) => {
            return (
              <div className="relative w-60">
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
