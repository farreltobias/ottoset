import React, { useEffect } from 'react';

import { Query } from '@prismicio/types';

import { EmblaCarouselType } from 'embla-carousel-react';

import { useEmblaInfiniteScroll } from '@hooks/useEmblaInfiniteScroll';

import { Card } from '@components/Card';
import { Spinner } from '@components/Spinner';

import { ProjectDocument } from '.slicemachine/prismicio';

import { ProjectsByCategory } from '@pages/index';

type Props = {
  index: number;
  projectPage: ProjectsByCategory;
  setProjectsPage: React.Dispatch<React.SetStateAction<ProjectsByCategory[]>>;
  emblaApi?: EmblaCarouselType;
};

export const FowardFunction: React.ForwardRefRenderFunction<any, Props> = (
  { projectPage, index, setProjectsPage, emblaApi },
  emblaRef,
) => {
  const [hasMoreToLoad, setHasMoreToLoad] = React.useState(
    !!projectPage.data.next_page,
  );

  const loading = useEmblaInfiniteScroll({
    embla: emblaApi,
    hasMoreToLoad,
    slides: projectPage.data.results,
  });

  useEffect(() => {
    const { next_page: nextPage } = projectPage.data;

    if (!loading || !nextPage) return;

    const loadMore = async () => {
      const data = (await fetch(nextPage).then((res) =>
        res.json(),
      )) as Query<ProjectDocument>;

      setProjectsPage((prevProjects) => {
        const newProjects = [...prevProjects];

        const oldResults = newProjects[index].data.results;

        newProjects[index].data = {
          ...data,
          results: [...oldResults, ...data.results],
        };

        return newProjects;
      });

      setHasMoreToLoad(!!data.next_page);
    };

    loadMore();
  }, [loading, projectPage, setProjectsPage, index]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <ul className="grid grid-flow-col gap-2 lg:gap-6">
        {projectPage.data.results.map((project) => (
          <Card key={project.uid} project={project} />
        ))}
        {hasMoreToLoad && (
          <li className="flex items-center justify-center w-80 h-[40.625rem] lg:w-[35rem] lg:h-[47.5rem]">
            {loading && <Spinner size={3} />}
          </li>
        )}
      </ul>
    </div>
  );
};

export const Carousel = React.forwardRef(FowardFunction);
