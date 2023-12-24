import { Title } from '@components/Texts';
import { Overlaid } from '@components/Texts/Overlaid';

export const Header: React.FC = () => {
  return (
    <header>
      <Overlaid center>
        <Overlaid.Title>Seja um prestador</Overlaid.Title>
        <Overlaid.SubTitle>De serviços Ottoset</Overlaid.SubTitle>
      </Overlaid>

      <Title
        as="h2"
        variant="h5"
        largeVariant="h3"
        className="text-center mt-4 mb-12 lg:mt-10 lg:mb-20 lg:text-left lg:w-2/3"
      >
        Trabalhe como prestador de serviços Ottoset. Atuamos em todo o Brasil.
      </Title>
    </header>
  );
};
