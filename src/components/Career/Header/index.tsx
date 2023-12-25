import dynamic from 'next/dynamic';

import type { Content } from '@prismicio/client';

import { Text, Title } from '@components/Texts';

import { List } from './List';

const PrismicRichText = dynamic(() =>
  import('@prismicio/react').then(({ PrismicRichText }) => PrismicRichText),
);

type Props = {
  career: Content.CareerDocument;
};

export const Header: React.FC<Props> = ({ career }) => {
  const { desirable, requirements, title } = career.data;

  return (
    <header>
      <PrismicRichText
        field={title}
        components={{
          heading1: ({ children }) => (
            <Title variant="h3" largeVariant="display4" center>
              {children}
            </Title>
          ),
        }}
      />

      {requirements.length > 0 && desirable.length > 0 && (
        <Text
          as="div"
          variant="p2"
          className="flex flex-col lg:flex-row lg:justify-between text-neutral-500 gap-y-10 lg:gap-0 mt-8 mb-12 lg:mt-12 lg:mb-20 lg:child:max-w-[50%]"
        >
          {requirements.length > 0 && (
            <List information={requirements} title="Requisitos" />
          )}
          {desirable.length > 0 && (
            <List information={desirable} title="Desejável" />
          )}
        </Text>
      )}
    </header>
  );
};
