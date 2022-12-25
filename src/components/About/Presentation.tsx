import React, { MutableRefObject } from 'react';
import dynamic from 'next/dynamic';

import DoubleArrow from '@public/icons/double-arrow-down.svg';

import { Button } from '@components/Button';
import { Text, Title } from '@components/Texts';
import { Overlaid } from '@components/Texts/Overlaid';

const ReactToPrint = dynamic(() => import('react-to-print'), {
  ssr: false,
});

const FowardFunction: React.ForwardRefRenderFunction<HTMLElement | null> = (
  _,
  ref,
) => {
  return (
    <div className="flex flex-col items-center lg:items-start text-center mb-20 sm:mb-24 lg:w-3/5 lg:text-start lg:mb-0">
      <Overlaid className="mb-8">
        <Overlaid.Title>Sobre a</Overlaid.Title>
        <Overlaid.SubTitle>Ottoset</Overlaid.SubTitle>
      </Overlaid>

      <Title as="h2" variant="h6" className="mb-3 lg:mb-2">
        Juntos, pensando no Futuro
      </Title>

      <Text variant="p2" className="flex flex-col mb-8 lg:mb-10 gap-y-6">
        <span>
          A Ottoset Energy é uma empresa especializada em soluções em energia.
        </span>
        <span>
          Fundada em 2017 na cidade de Londrina/PR, atuamos em vendas, locação,
          manutenção e monitoramento remoto de grupos geradores, fabricação de
          quadros de transferência automático (QTA), sistema fotovoltaico e
          manutenção predial com atuação em todo o Brasil.
        </span>
        <span>
          Profissionais especializados, treinamentos periódicos, modernos
          equipamentos e tecnologia avançada habilitam a Ottoset Energy a
          prestar serviços com qualidade, comprometimento e agilidade.
        </span>
      </Text>

      <ReactToPrint
        trigger={() => (
          <Button
            variant="outline"
            className="item-center justify-center lg:justify-start font-title max-w-md w-full lg:w-fit gap-x-2 group"
          >
            Baixar apresentação em pdf
            <DoubleArrow className="transition-all fill-primary-600 group-hover:fill-secondary-900" />
          </Button>
        )}
        content={() => (ref as MutableRefObject<HTMLElement | null>)?.current}
      />
    </div>
  );
};

export const Presentation = React.forwardRef(FowardFunction);
