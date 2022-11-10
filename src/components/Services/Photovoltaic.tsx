import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import DoubleArrow from '@public/navigation/double-arrow-right.svg';

import sunrise from '@public/photos/sunrise.png';

import { Article, Content } from '@components/Article';

export const Photovoltaic: React.FC = () => {
  return (
    <Article id="fotovoltaica" className="lg:pt-48 lg:-mt-[4.5rem]">
      <Article.Image>
        <Image
          src={sunrise}
          alt="sunrise"
          placeholder="blur"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Article.Image>

      <Article.Content className="py-12 lg:py-0">
        <Content.Title>Energia Solar Fotovoltaica</Content.Title>
        <Content.Text className="mb-6">
          Atua no segmento de geração de energia. Garantia de manutenção,
          prontos para trazer mais segurança para a sua operação.
        </Content.Text>
        <Content.SubTitle>Projetos para empresas</Content.SubTitle>
        <Content.Text>
          Dimensionamos o sistema para otimizar o seu payback e garantir assim o
          melhor investimento para a sua empresa
        </Content.Text>
        <Content.SubTitle>Projetos para propriedades rurais</Content.SubTitle>
        <Content.Text>
          Transformamos a sua propriedade rural em uma grande usina solar
          fotovoltaica.
        </Content.Text>
        <Content.SubTitle>Projetos para residências</Content.SubTitle>
        <Content.Text>
          Dimensionamos e cuidamos de todo o processo de instalação e
          homologação do seu sistema.
        </Content.Text>
        <Content.Button className="xl:w-3/5">
          <Link href="/contato" className="flex justify-center w-full">
            Simule seu sistema
            <DoubleArrow className="fill-primary-600 group-hover:fill-secondary-900" />
          </Link>
        </Content.Button>
      </Article.Content>
    </Article>
  );
};
