import { Text, Title } from '@components/Texts';
import { missions } from '@data/static/content';
import { Children } from 'react';

export const Mission: React.FC = () => (
  <section className="relative container mx-auto flex flex-col items-center lg:mt-16">
    <span className="absolute -z-10 bg-[url('/backgrounds/mission.svg')] bg-top h-screen w-screen" />
    <Title className="mt-20 mb-2">Missão, Visão e Valores</Title>
    <Text variant="p2" className="text-neutral-500 mb-10">
      Nos pautamos nos princípios da Ética, transparência e integridade
    </Text>
    <ul className="flex flex-col lg:flex-row max-w-[50.25rem]">
      {Children.toArray(
        missions.map(({ topic, content }) => (
          <li className="px-7 first:pl-0 last:pr-0">
            <Title as="h2" variant="h6" className="mb-2">
              {topic}
              <span className="text-primary-600">.</span>
            </Title>
            <Text variant="p2" className="text-neutral-800">
              {content}
            </Text>
          </li>
        ))
      )}
    </ul>
  </section>
);
