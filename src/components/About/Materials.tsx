import { Title } from '@components/Texts';
import { Overlaid } from '@components/Texts/Overlaid';

export const Materials: React.FC = () => {
  return (
    <section className="hidden lg:block container mx-auto lg:mt-24 mb-24">
      <Overlaid>
        <Overlaid.Title>Outros</Overlaid.Title>
        <Overlaid.SubTitle>Materiais sobre nós</Overlaid.SubTitle>
      </Overlaid>
      <div className="flex justify-between w-full relative child:w-[27.5vw] child:h-[40vw] mt-12">
        <span className="flex mt-auto relative bg-primary-600">
          <Title
            as="h2"
            variant="h2"
            className="[writing-mode:vertical-rl] -rotate-180 mt-auto text-neutral-50 p-2 whitespace-pre"
          >
            Apresentação <br />
            comercial
          </Title>
          <span className="min-w-full max-h-full -mt-14 bg-[url('/photos/shock.png')] bg-cover bg-center bg-no-repeat" />
        </span>
        <span className="absolute bottom-28 left-1/3 bg-[url('/photos/services.png')] bg-cover bg-center bg-no-repeat">
          <Title
            as="h2"
            variant="h2"
            className="[writing-mode:vertical-rl] -rotate-180 text-neutral-50 p-2 whitespace-pre"
          >
            Portfolio de serviços
          </Title>
        </span>
        <span className="flex bg-primary-600 mb-44 z-10">
          <Title
            as="h2"
            variant="h2"
            className="[writing-mode:vertical-rl] -rotate-180 mt-auto text-neutral-50 p-2 whitespace-pre"
          >
            Guia da Marca
          </Title>
          <span className="min-w-full max-h-full inline-block bottom-1/4 right-0 bg-[url('/photos/energy.png')] bg-cover bg-center bg-no-repeat" />
        </span>
      </div>
    </section>
  );
};
