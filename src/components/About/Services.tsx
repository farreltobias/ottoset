import { Areas } from '@components/Areas';
import { Overlaid } from '@components/Texts/Overlaid';

export const Services: React.FC = () => {
  return (
    <section className="mt-16 lg:mt-20">
      <Overlaid className="text-center mb-12">
        <Overlaid.Title>Nossos</Overlaid.Title>
        <Overlaid.SubTitle>Serviços</Overlaid.SubTitle>
      </Overlaid>
      <Areas />
    </section>
  );
};
