import { Children } from 'react';

import { Expertise } from '@components/Expertise';
import { Overlaid } from '@components/Texts/Overlaid';

import { expertises } from '@data/static/expertises';

export const Expertises: React.FC = () => {
  return (
    <section className="mt-28">
      <Overlaid className="text-center mb-12">
        <Overlaid.Title>Conheça nossas</Overlaid.Title>
        <Overlaid.SubTitle>Áreas de Atuação</Overlaid.SubTitle>
      </Overlaid>
      <div className="flex flex-col lg:flex-row lg:overflow-auto">
        {Children.toArray(
          expertises.map(({ image, link, title }) => (
            <Expertise image={image} link={link} title={title} />
          ))
        )}
      </div>
    </section>
  );
};
