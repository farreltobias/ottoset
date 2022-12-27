import { useMemo, useState } from 'react';

import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import { Title } from '@components/Texts';

import { Carousel } from './Carousel';

import { Tab } from '@headlessui/react';
import { ProjectsByCategory } from '@pages/index';

type Props = {
  initialData: ProjectsByCategory[];
};

export const Tabs: React.FC<Props> = ({ initialData }) => {
  const [projectsPage, setProjectsPage] =
    useState<ProjectsByCategory[]>(initialData);

  const options: EmblaOptionsType = useMemo(
    () => ({
      dragFree: true,
      align: 'start',
      containScroll: 'keepSnaps',
    }),
    [],
  );

  const wheelGestures = WheelGesturesPlugin();
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [wheelGestures]);

  return (
    <Tab.Group>
      <Tab.List className="mb-4 lg:mb-14 flex overflow-x-auto">
        {projectsPage.map(({ category }) => (
          <Tab
            key={category}
            className="inline-block border-b outline-none ui-not-selected:border-neutral ui-selected:border-secondary-900"
          >
            <Title
              as="span"
              variant="h6"
              largeVariant="h4"
              className="inline-block whitespace-nowrap py-2 px-6 text-neutral ui-not-selected:opacity-[0.7]"
            >
              {category}
            </Title>
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mb-16 lg:mb-36">
        {projectsPage.map((data, index) => (
          <Tab.Panel key={data.category}>
            <Carousel
              ref={emblaRef}
              emblaApi={emblaApi}
              index={index}
              projectPage={data}
              setProjectsPage={setProjectsPage}
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
