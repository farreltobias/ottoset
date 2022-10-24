import { Service } from '@components/Service';
import { Overlaid } from '@components/Texts/Overlaid';
import { services } from '@data/static/services';
import { Children } from 'react';

export const Services: React.FC = () => {
  return (
    <section className="mt-20">
      <Overlaid className="text-center mb-12">
        <Overlaid.Title>Nossos</Overlaid.Title>
        <Overlaid.SubTitle>Serviços</Overlaid.SubTitle>
      </Overlaid>
      <div className="flex flex-wrap">
        {Children.toArray(
          services.map(({ icon, image, title, link }) => (
            <Service title={title} icon={icon} image={image} link={link} />
          ))
        )}
      </div>
    </section>
  );
};
