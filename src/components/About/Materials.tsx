import energy from '@public/photos/energy.webp';
import services from '@public/photos/services.webp';
import shock from '@public/photos/shock.webp';

import { BlurImage } from '@components/BlurImage';
import { Title } from '@components/Texts';
import { Overlaid } from '@components/Texts/Overlaid';

export const Materials: React.FC = () => {
  return (
    <article className="mt-20 lg:mt-24 mb-24">
      <Overlaid className="container mx-auto" center>
        <Overlaid.Title>Outros</Overlaid.Title>
        <Overlaid.SubTitle>Materiais sobre nós</Overlaid.SubTitle>
      </Overlaid>

      <div className="px-4 xs:container xs:mx-auto flex justify-between w-full relative child:w-28 child:h-48 xs:child:w-44 xs:child:h-80 sm:child:w-60 sm:child:h-96 md:child:w-[20rem] md:child:h-[32rem] lg:child:w-[25rem] lg:child:h-[37.5rem] xl:child:w-[30rem] xl:child:h-[50rem] mt-12">
        <div className="flex mt-auto relative bg-primary-600">
          <Title
            as="h2"
            xlVariant="h2"
            largeVariant="h3"
            smallVariant="h4"
            variant="h6"
            className="[writing-mode:vertical-rl] -rotate-180 mt-auto text-neutral-50 p-2 whitespace-pre"
          >
            Apresentação <br />
            comercial
          </Title>
          <BlurImage
            src={shock}
            alt="arte de apresentação comercial"
            placeholder="blur"
            className="min-w-full max-h-full -mt-2 xs:-mt-9 lg:-mt-14 object-cover object-center"
            sizes="(min-width: 768px) 33vw, (min-width: 1024px) 25vw, 33vw"
          />
        </div>
        <div className="absolute bottom-6 xs:bottom-20 lg:bottom-28 left-1/3">
          <div className="relative full">
            <BlurImage
              src={services}
              alt="arte de portfólio de serviços"
              className="object-cover object-center"
              placeholder="blur"
              sizes="(min-width: 768px) 33vw, (min-width: 1024px) 25vw, 33vw"
              fill
            />
            <Title
              as="h2"
              xlVariant="h2"
              largeVariant="h3"
              smallVariant="h4"
              variant="h6"
              className="[writing-mode:vertical-rl] -rotate-180 text-neutral-50 p-2 whitespace-pre"
            >
              Portfolio de serviços
            </Title>
          </div>
        </div>
        <div className="flex bg-no-repeat mb-10 xs:mb-28 lg:mb-44 z-10">
          <div className="relative full">
            <BlurImage
              src={energy}
              alt="arte de guia da marca"
              placeholder="blur"
              className="object-cover object-center"
              sizes="(min-width: 768px) 33vw, (min-width: 1024px) 25vw, 33vw"
              fill
            />
            <Title
              as="h2"
              xlVariant="h2"
              largeVariant="h3"
              smallVariant="h4"
              variant="h6"
              className="h-full [writing-mode:vertical-rl] bg-primary-600 text-end -translate-x-full -rotate-180 text-neutral-50 p-2 whitespace-pre"
            >
              Guia da Marca
            </Title>
          </div>
        </div>
      </div>
    </article>
  );
};
