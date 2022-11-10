import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import DoubleArrow from '@public/navigation/double-arrow-right.svg';

import aviation from '@public/photos/aviation.png';

import { Article, Content } from '@components/Article';

export const Aviation: React.FC = () => {
  return (
    <Article id="aviacao" className="lg:pt-48 lg:-mt-[4.5rem]" order="right">
      <Article.Image className="shadow-[-24px_24px_0px_-1px_white,-24px_24px_#818181] lg:shadow-[88px_32px_0_-1px_white,88px_32px_#818181]">
        <Image
          src={aviation}
          alt="Aviação"
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

      <Article.Content className="py-12 lg:py-[6.75rem]">
        <Content.Title>Aviação</Content.Title>
        <Content.SubTitle>Modernização de GPU</Content.SubTitle>
        <Content.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tempor
          aliquet quis feugiat ac at. Scelerisque lectus phasellus dignissim nec
          accumsan. Mi tincidunt aenean tristique metus venenatis ac, volutpat.
          Dictum ultrices lacus at hac nibh bibendum at elit. Nisl, amet congue
          lectus a, a. Diam, mattis imperdiet pellentesque euismod mattis.
          Blandit congue nullam nisl, sed. Egestas ultricies mollis augue cum.
          Lacus facilisis lorem morbi pharetra tristique sit eget tortor
          pulvinar. Condimentum volutpat, volutpat dui habitant. Fermentum
          facilisis enim nunc placerat est cras eget mi. Proin odio amet,
          aliquet elementum. Elementum mi ultrices dui sagittis convallis.
        </Content.Text>
        <Content.Button className="xl:w-3/5">
          <Link href="/contato" className="flex justify-center w-full">
            Solicite um orçamento
            <DoubleArrow className="fill-primary-600 group-hover:fill-secondary-900" />
          </Link>
        </Content.Button>
      </Article.Content>
    </Article>
  );
};
