import { Text, Title } from '@components/Texts';

export const Header: React.FC = () => {
  return (
    <>
      <Title as="h1" variant="h3" largeVariant="display2" center>
        Vamos iniciar um projeto juntos
      </Title>

      <Text
        variant="p2"
        largeVariant="p1"
        center
        className="text-neutral-900 mt-6 lg:mt-8 mb-12 lg:mb-20"
      >
        Preencha o formulário abaixo para contato e orçamentos
      </Text>
    </>
  );
};
