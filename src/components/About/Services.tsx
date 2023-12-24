import React from 'react';

import { Areas } from '@components/Areas';
import { Overlaid } from '@components/Texts/Overlaid';

import { Service } from '@data/static/services';

type Props = {
  services: Service[];
};

export const Services: React.FC<Props> = ({ services }) => {
  return (
    <article className="mt-16 lg:mt-20">
      <Overlaid className="text-center mb-12">
        <Overlaid.Title>Nossos</Overlaid.Title>
        <Overlaid.SubTitle>Serviços</Overlaid.SubTitle>
      </Overlaid>

      <Areas services={services} />
    </article>
  );
};
