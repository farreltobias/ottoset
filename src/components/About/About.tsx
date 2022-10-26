import Image from 'next/image';

import DoubleArrow from '@public/navigation/double-arrow-down.svg';

import eletronic from '@public/photos/eletronic.png';
import mechanic from '@public/photos/mechanic.png';
import office from '@public/photos/office.png';
import streetview from '@public/photos/streetview.png';

import { Button } from '@components/Button';
import { Text, Title } from '@components/Texts';
import { Overlaid } from '@components/Texts/Overlaid';

export const About: React.FC = () => (
  <section className="container mx-auto flex flex-col lg:flex-row mt-10 lg:mt-12">
    <div className="flex flex-col items-center lg:items-start text-center mb-12 sm:mb-24 lg:w-1/2 lg:text-start lg:mb-0">
      <Overlaid className="mb-8">
        <Overlaid.Title>Sobre a</Overlaid.Title>
        <Overlaid.SubTitle>Ottoset</Overlaid.SubTitle>
      </Overlaid>
      <Title as="h2" variant="h6" className="mb-3 lg:mb-2">
        Juntos, pensando no Futuro
      </Title>
      <Text variant="p2" className="mb-10">
        A Ottoset Energy é uma empresa especializada em soluções em energia.
        <br />
        <br />
        Fundada em 2017 na cidade de Londrina/PR, atuamos em vendas, locação,
        manutenção e monitoramento remoto de grupos geradores, fabricação de
        quadros de transferência automático (QTA), sistema fotovoltaico e
        manutenção predial com atuação em todo o Brasil.
        <br />
        <br />
        Profissionais especializados, treinamentos periódicos, modernos
        equipamentos e tecnologia avançada habilitam a Ottoset Energy a prestar
        serviços com qualidade, comprometimento e agilidade.
      </Text>
      <Button
        variant="outline"
        className="item-center justify-center lg:justify-start font-title max-w-md w-full lg:w-fit group"
        onClick={() => window.print()}
      >
        Baixar apresentação em pdf
        <DoubleArrow className="fill-primary-600 group-hover:fill-secondary-900" />
      </Button>
    </div>
    <div className="flex items-center justify-center w-full lg:pl-32 lg:w-1/2">
      <div className="relative w-5/6">
        <Image
          src={office}
          layout="responsive"
          alt="office"
          placeholder="blur"
        />
        <div className="absolute w-2/5 top-0 left-0 -translate-x-1/3 -translate-y-1/3">
          <div className="relative">
            <Image
              src={streetview}
              layout="responsive"
              alt="streetview"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="absolute w-2/5 top-0 right-0 -translate-x-1/5 -translate-y-1/3 lg:-translate-y-3/4">
          <div className="relative">
            <Image
              src={eletronic}
              layout="responsive"
              alt="eletronic"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="absolute w-2/5 bottom-0 right-0 translate-x-1/3 translate-y-1/3">
          <div className="relative">
            <Image
              src={mechanic}
              layout="responsive"
              alt="mechanic"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
