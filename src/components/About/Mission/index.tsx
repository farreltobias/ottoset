import Image from 'next/image';

import background from '@public/backgrounds/mission.webp';

import { Text, Title } from '@components/Texts';

import { Mision } from '@data/static/content';

import { Attributes } from './Attributes';

type Props = {
  missions: Mision[];
};

export const Mission: React.FC<Props> = ({ missions }) => (
  <div className="relative mt-24 lg:mt-16">
    <Image
      src={background}
      alt="plano de fundo com formas geométricas"
      placeholder="blur"
      className="absolute -z-10 h-full xl:h-auto object-cover object-top"
      sizes="(min-width: 768px) 384vw, (min-width: 1024px) 100vw"
    />

    <div className="container mx-auto flex flex-col items-center lg:pt-20">
      <Title
        as="h2"
        variant="h3"
        largeVariant="h1"
        className="text-center mb-4 lg:mb-2"
      >
        Missão, Visão e Valores
      </Title>
      <Text variant="p2" className="text-center text-neutral-500 mb-8 lg:mb-10">
        Nos pautamos nos princípios da Ética, transparência e integridade
      </Text>

      <Attributes missions={missions} />
    </div>
  </div>
);
