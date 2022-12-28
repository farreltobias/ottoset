import React from 'react';

import DoubleArrow from '@public/navigation/double-arrow-right.svg';

import generator from '@public/photos/generator-alt.png';

import { Article, Content } from '@components/Article';
import { BlurImage } from '@components/BlurImage';

export const Generators: React.FC = () => {
  return (
    <Article id="grupo-geradores" className="pt-32 -mt-24 lg:pt-48 lg:-mt-36">
      <Article.Content className="pb-12 lg:py-[6.75rem] lg:order-last">
        <Content.Title>Grupo geradores</Content.Title>
        <Content.SubTitle>Geradores</Content.SubTitle>
        <Content.Text className="text-neutral-500">
          Atua no segmento de geração de energia. Garantia de manutenção,
          prontos para trazer mais segurança para a sua operação.
        </Content.Text>
        <Content.SubTitle>Monitoramento de Geradores</Content.SubTitle>
        <Content.Text className="text-neutral-500">
          Monitoramento remoto através de APP e WEB. Monitoramento contínuo e em
          tempo real.
        </Content.Text>
        <Content.Link href="/contato" text="Seja um cliente Ottoset">
          Seja um cliente Ottoset
          <DoubleArrow className="transition-all fill-primary-600 group-hover:fill-secondary-900" />
        </Content.Link>
      </Article.Content>
      <Article.Image className="shadow-[-24px_24px_0px_-1px_white,-24px_24px_#818181] lg:shadow-[-43px_23px_0px_-1px_white,-43px_23px_#818181]">
        <BlurImage
          src={generator}
          alt="generator"
          placeholder="blur"
          className="w-full h-auto object-cover object-center"
          sizes="100vw"
        />
      </Article.Image>
    </Article>
  );
};
