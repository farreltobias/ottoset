import { Children } from 'react';

import { Text, Title } from '@components/Texts';

import { missions } from '@data/static/content';

export const Mission: React.FC = () => (
  <section className="relative container mx-auto flex flex-col items-center mt-24 lg:mt-16">
    <span className="absolute -z-10 bg-[url('/backgrounds/mission.svg')] bg-no-repeat bg-top h-screen w-screen" />
    <Title
      variant="h3"
      largeVariant="h1"
      className="text-center lg:mt-20 mb-4 lg:mb-2"
    >
      Missão, Visão e Valores
    </Title>
    <Text variant="p2" className="text-center text-neutral-500 mb-8 lg:mb-10">
      Nos pautamos nos princípios da Ética, transparência e integridade
    </Text>
    <ul className="flex flex-col lg:flex-row max-w-xs lg:max-w-[50.25rem]">
      {Children.toArray(
        missions.map(({ topic, content }) => (
          <li className="mb-10 last:mb-0 lg:mb-0 lg:px-7 first:pl-0 last:pr-0">
            <Title as="h2" variant="h6" center className="mb-2">
              {topic}
              <span className="text-primary-600">.</span>
            </Title>
            <Text variant="p2" center className="text-neutral-800">
              {content}
            </Text>
          </li>
        )),
      )}
    </ul>
  </section>
);
