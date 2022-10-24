import { Children, Fragment } from 'react';
import { Tab } from '@headlessui/react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';

import { Title } from '@components/Texts';

import type { Tab as TabProps } from '@data/static/projects';

import { Carousel } from './Carousel';

type Props = {
  tabs: TabProps[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const options: EmblaOptionsType = {
    dragFree: true,
    align: 'start',
    containScroll: 'keepSnaps',
  };

  const [emblaRef] = useEmblaCarousel(options);

  return (
    <Tab.Group>
      <Tab.List className="mb-4 lg:mb-14 flex overflow-x-auto">
        {Children.toArray(
          tabs.map(({ label }) => (
            <Tab className="inline-block border-b outline-none ui-not-selected:border-neutral ui-selected:border-secondary-900">
              <Title
                as="span"
                variant="h6"
                className="inline-block lg:text-2xl whitespace-nowrap py-2 px-6 text-neutral ui-not-selected:opacity-[0.7]"
              >
                {label}
              </Title>
            </Tab>
          ))
        )}
      </Tab.List>
      <Tab.Panels className="mb-16 lg:mb-36">
        {Children.toArray(
          tabs.map(({ projects }) => (
            <Tab.Panel as={Fragment}>
              <Carousel projects={projects} ref={emblaRef} />
            </Tab.Panel>
          ))
        )}
      </Tab.Panels>
    </Tab.Group>
  );
};