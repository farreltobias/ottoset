import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

import DoubleArrow from '@public/navigation/double-arrow-right.svg';

import generator from '@public/photos/generator-alt.png';

import { Article, Content } from '@components/Article';

export const Generators: React.FC = () => {
  return (
    <Article id="grupo-geradores" className="lg:pt-48 lg:-mt-36">
      <Article.Image>
        <Image
          src={generator}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          alt="generator"
          placeholder="blur"
        />
      </Article.Image>
      <Article.Content className="py-12 lg:py-[6.75rem]">
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
        <Content.Button className="xl:w-3/5">
          <Link href="/contato">
            <a className="flex justify-center w-full">
              Seja um cliente Ottoset
              <DoubleArrow className="fill-primary-600 group-hover:fill-secondary-900" />
            </a>
          </Link>
        </Content.Button>
      </Article.Content>
    </Article>
  );
};
