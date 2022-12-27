import React from 'react';

import Badge from '@public/company/badge.svg';
import Foco from '@public/company/foco.svg';

import computer from '@public/photos/computer.png';

import { BlurImage } from '@components/BlurImage';
import { List } from '@components/List';
import { Caps, Text } from '@components/Texts';
import { Overlaid } from '@components/Texts/Overlaid';

type Props = {
  reasons: string[];
};

export const WhyUs: React.FC<Props> = ({ reasons }) => {
  return (
    <div className="container mx-auto flex flex-col w-full mt-20 lg:mt-44 lg:!px-0">
      <Overlaid as="h2" className="text-center">
        <Overlaid.Title>Por que</Overlaid.Title>
        <Overlaid.SubTitle>nos escolher?</Overlaid.SubTitle>
      </Overlaid>

      <List className="mt-8 lg:mt-[4.5rem] gap-x-8 gap-y-10 xl:!px-0">
        <List.Content
          items={reasons}
          className="order-last lg:order-first lg:w-1/2"
          TextComponent={({ item }) => (
            <Text variant="p2" className="xl:text-2xl xl:leading-150">
              {item}
            </Text>
          )}
        />
        <List.Images>
          <div className="relative w-full">
            <BlurImage
              src={computer}
              alt="computer with monitor"
              placeholder="blur"
              className="w-full h-auto"
              sizes="100vw"
            />
            <Caps className="absolute bg-primary-50 text-base lg:text-2xl rotate-180 top-0 right-0 h-full flex justify-center px-2 lg:px-4 [writing-mode:vertical-rl]">
              Por que nos escolher?
            </Caps>
            <div className="absolute top-0 w-[calc(100%-2.5rem)] lg:w-[calc(100%-4.25rem)] h-full">
              <Foco className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6" />
              <Badge className="absolute child:fill-neutral top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4" />
            </div>
          </div>
        </List.Images>
      </List>
    </div>
  );
};
