import { Text, Title } from '@components/Texts';

export const Services: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-between mt-16 lg:mt-40">
      <Title
        as="h2"
        variant="h3"
        largeVariant="h2"
        center
        className="mb-8 lg:leading-relaxed whitespace-pre"
      >
        Serviços GMC
        <br />
        Serviços UFV
      </Title>

      <Text variant="p2" center className="max-w-4xl lg:ml-12">
        A Ottoset Energy é uma empresa especializada em soluções energéticas,
        atuando no segmento de geração de energia, com foco em geradores de
        energia, monitoramento remoto e manutenção preventiva e corretiva.
        Oferecemos soluções completas para o seu negócio, com garantia de
        qualidade e segurança. Nossos serviços são realizados por profissionais
        altamente qualificados e com experiência no mercado. Contamos com
        serviços para grupos geradores (GMG) & energia solar fotovoltaica (UFV),
        com manutenção preventiva e corretiva, monitoramento remoto,
        modernização de GPU e GME, e projetos de instalação de geradores de
        energia. Os serviços de GMC e UFV são realizados em todo o território
        nacional. Entre em contato conosco e solicite um orçamento.
      </Text>
    </div>
  );
};
