import { createRef, useState } from 'react';

import type { Content } from '@prismicio/client';
import { Query } from '@prismicio/types';

import { AnimatePresence } from 'framer-motion';

import { useInfiniteScroll } from '@hooks/useInfiniteScroll';

import { Button } from '@components/Button';
import { Card } from '@components/Card';
import { Spinner } from '@components/Spinner';

type Props = {
  initialData: Query<Content.ProjectDocument>;
};

const Loader: React.FC = () => (
  <div className="flex items-center justify-center max-w-md w-full lg:w-fit mt-16 mx-auto">
    <Spinner color="black" size={2} />
  </div>
);

export const List: React.FC<Props> = ({ initialData }) => {
  const [data, setData] = useState(initialData);

  const ref = createRef<HTMLUListElement>();

  const [projects, setProjects] = useState<Content.ProjectDocument[]>(
    initialData.results,
  );

  const handleSearch = async () => {
    const maxPageHasReached = data.page >= data.total_pages;

    if (maxPageHasReached || loading) return;

    const response = await fetch(data.next_page as string);
    const newData = (await response.json()) as typeof initialData;

    setProjects((prev) => [...prev, ...newData.results]);
    setData(newData);
  };

  const { loading } = useInfiniteScroll({
    ref,
    handleSearch,
    data,
    pageToUse: 2,
  });

  return (
    <>
      <ul
        ref={ref}
        className="project-list grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {projects.map((project, index) => (
            <Card
              key={project.uid}
              className="project h-[40.625rem]"
              project={project}
              priority={index < 3}
            />
          ))}
        </AnimatePresence>
      </ul>

      {loading && <Loader />}

      {data.page < data.total_pages && !loading && (
        <Button
          variant="outline"
          disabled={loading}
          className="justify-center max-w-md w-full lg:w-fit mt-16 mx-auto"
          onClick={handleSearch}
        >
          Carregar mais
        </Button>
      )}
    </>
  );
};
