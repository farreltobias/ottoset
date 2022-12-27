import React from 'react';
import Image from 'next/image';

import DoubleArrow from '@public/navigation/double-arrow-right.svg';

import aviation from '@public/photos/aviation.png';

import { Article, Content } from '@components/Article';

export const Aviation: React.FC = () => {
  return (
    <Article id="aviacao" className="pt-32 -mt-20 lg:pt-48 lg:-mt-[4.5rem]">
      <Article.Image className="shadow-[24px_24px_0px_-1px_white,24px_24px_#818181] lg:shadow-[32px_32px_0_-1px_white,32px_32px_#818181]">
        <Image
          src={aviation}
          alt="Aviação"
          placeholder="blur"
          className="w-full h-auto object-cover object-center"
          sizes="100vw"
        />
      </Article.Image>

      <Article.Content className="pb-12 lg:py-[6.75rem]">
        <Content.Title>Aviação</Content.Title>
        <Content.SubTitle>Modernização de GPU</Content.SubTitle>
        <Content.Text>
          A Aviação é um dos segmentos que mais cresce no mundo, e a cada dia
          novas tecnologias são desenvolvidas para tornar a experiência do
          passageiro ainda mais confortável e segura. A Ottoset Energy é
          especialista em projetos de modernização de GPU (Geradores de Potência
          de Unidade) e de GME (Geradores de Motores de Emergência) para
          aeronaves, e possui uma equipe de engenheiros e técnicos altamente
          qualificados para atender as necessidades de cada cliente. Nossos
          projetos são desenvolvidos de acordo com as normas e regulamentações
          internacionais e nacionais, e são certificados por órgãos de
          fiscalização aeronáutica.
        </Content.Text>
        <Content.Link href="/contato" text="Solicite um orçamento">
          Solicite um orçamento
          <DoubleArrow className="transition-all fill-primary-600 group-hover:fill-secondary-900" />
        </Content.Link>
      </Article.Content>
    </Article>
  );
};
