import { Children } from 'react';

import { Text, Title } from '@components/Texts';

import { Mision } from '@data/static/content';

type Props = {
  missions: Mision[];
};

const Item: React.FC<Mision> = ({ topic, content }) => (
  <li>
    <article className="flex flex-col gap-y-2">
      <Title variant="h6" center>
        {topic}
        <span className="text-primary-600">.</span>
      </Title>
      <Text variant="p2" className="text-neutral-800" center>
        {content}
      </Text>
    </article>
  </li>
);

export const Attributes: React.FC<Props> = ({ missions }) => {
  return (
    <ul className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-14 max-w-xs lg:max-w-[50.25rem]">
      {Children.toArray(
        missions.map(({ topic, content }) => (
          <Item topic={topic} content={content} />
        )),
      )}
    </ul>
  );
};
