import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import DoubleArrow from '@public/navigation/double-arrow-right.svg';

import adequacy from '@public/photos/adequacy.png';

import { Article, Content } from '@components/Article';

export const Maintenance: React.FC = () => {
  return (
    <Article id="manutencao" className="pt-32 -mt-20 lg:pt-48 lg:-mt-[4.5rem]">
      <Article.Image className="shadow-[-24px_24px_0px_-1px_white,-24px_24px_#818181] lg:shadow-[-22px_24px_0_-1px_white,-22px_24px_#818181]">
        <Image
          src={adequacy}
          alt="sunrise"
          placeholder="blur"
          className="w-full h-auto object-cover object-center"
          sizes="100vw"
        />
      </Article.Image>

      <Article.Content className="pb-12 lg:py-0">
        <Content.Title>Manutenção e adequação</Content.Title>
        <Content.SubTitle>Residencial e Comercial</Content.SubTitle>
        <Content.Text>
          Os protocolos de manutenção elétrica utilizados em prédios comerciais
          ou industriais permitem identificar falhas elétricas ocultas. Com
          isso, elas podem ser corrigidas logo no início de sua formação e serem
          evitadas.
          <br />
          <br />
          O ar-condicionado é um aparelho de grande potência que não pode ser
          instalado como um eletrodoméstico comum. Realizamos todo o
          planejamento elétrico para a instalação de sistemas de
          ar-condicionado.
          <br />
          <br />
          Equipe especial para projetos e soluções hidráulicas em retrofitting,
          projetos especiais ou manutenção. Nossa equipe de engenheiros está
          apta para desenvolver os mais diversos tipos de projetos hidráulicos.
          <br />
          <br />
          Adequação NR10, análise termográfica, laudo SPDA e aterramento,
          projeto concessionária.
        </Content.Text>
        <Content.Button className="xl:w-3/5">
          <Link
            href="/contato"
            className="flex items-center justify-center w-full"
          >
            Seja um cliente Ottoset
            <DoubleArrow className="transition-all fill-primary-600 group-hover:fill-secondary-900" />
          </Link>
        </Content.Button>
      </Article.Content>
    </Article>
  );
};
