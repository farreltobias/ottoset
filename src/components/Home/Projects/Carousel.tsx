import React, { useCallback, useEffect } from 'react';

import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel-react';

import { useInfiniteScroll } from '@hooks/useInfiniteScroll';

import { Card } from '@components/Card';
import { Spinner } from '@components/Spinner';

import { projectPager, ProjectsPage } from '@graphql/projectPager';
import { projectPagerByCategory } from '@graphql/projectPagerByCategory';

export type ProjectsPageByCategory = {
  category: string;
  data: ProjectsPage;
};

type Props = {
  index: number;
  projectPage: ProjectsPageByCategory;
  setProjectsPage: React.Dispatch<
    React.SetStateAction<ProjectsPageByCategory[]>
  >;
  emblaApi?: EmblaCarouselType;
  options: EmblaOptionsType;
};

export const FowardFunction: React.ForwardRefRenderFunction<any, Props> = (
  { projectPage, index, setProjectsPage, emblaApi, options },
  emblaRef,
) => {
  const loadingMore = useInfiniteScroll({
    embla: emblaApi,
    hasMoreToLoad: projectPage.data.pageInfo.hasNextPage,
    slides: projectPage.data.projects,
  });

  const reloadEmbla = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.reInit(options);
  }, [emblaApi, options]);

  useEffect(() => {
    const { endCursor, hasNextPage } = projectPage.data.pageInfo;

    if (!endCursor || !loadingMore || !hasNextPage) return;

    const loadMore = async () => {
      let data = {} as ProjectsPage;

      if (projectPage.category === 'Todos') {
        data = await projectPager(endCursor);
      } else {
        data = await projectPagerByCategory(projectPage.category, endCursor);
      }

      setProjectsPage((prevProjects) => {
        const newProjects = [...prevProjects];

        const oldProjects = newProjects[index].data.projects;

        newProjects[index].data = {
          pageInfo: data.pageInfo,
          projects: [...oldProjects, ...data.projects],
        };

        return newProjects;
      });
    };

    loadMore();
  }, [loadingMore, projectPage, setProjectsPage, index]);

  useEffect(() => {
    reloadEmbla();
  }, [projectPage.data.projects, reloadEmbla]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="grid grid-flow-col gap-2 lg:gap-6">
        {projectPage.data.projects.map((project) => (
          <Card key={project.slug} project={project} />
        ))}
        {projectPage.data.pageInfo.hasNextPage && (
          <div className="flex items-center justify-center w-80 h-[40.625rem] lg:w-[35rem] lg:h-[47.5rem]">
            {loadingMore && <Spinner size={3} />}
          </div>
        )}
      </div>
    </div>
  );
};

export const Carousel = React.forwardRef(FowardFunction);
