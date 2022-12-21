import { useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { AnimatePresence } from 'framer-motion';

import { Button } from '@components/Button';
import { Card } from '@components/Card';
import { Spinner } from '@components/Spinner';

import { projectPager, ProjectsPage } from '@graphql/projectPager';

type Props = {
  initialData: ProjectsPage;
};

const Loader: React.FC = () => (
  <div className="flex items-center justify-center max-w-md w-full lg:w-fit mt-16 mx-auto">
    <Spinner color="black" size={2} />
  </div>
);

export const List: React.FC<Props> = ({
  initialData: {
    projects: initialProjects,
    pageInfo: { endCursor: initialCursor, hasNextPage: initialHasNextPage },
  },
}) => {
  const [data, setData] = useState({
    projects: initialProjects,
    hasNextPage: initialHasNextPage,
  });

  const cursor = useRef(initialCursor || null);
  const [loading, setLoading] = useState(false);
  const [firstLoaded, setFirstLoaded] = useState(false);

  const onClick = async () => {
    if (loading || !cursor.current || !data.hasNextPage) return;

    setLoading(true);

    const {
      pageInfo: { hasNextPage: newHasNextPage, endCursor },
      projects: newProjects,
    } = await projectPager(cursor.current);

    cursor.current = endCursor || null;

    setData((prev) => ({
      projects: [...prev.projects, ...newProjects],
      hasNextPage: newHasNextPage,
    }));

    setLoading(false);

    if (!firstLoaded) setFirstLoaded(true);
  };

  return (
    <>
      <InfiniteScroll
        className="!overflow-hidden"
        dataLength={data.projects.length}
        next={onClick}
        hasMore={data.hasNextPage && firstLoaded}
        loader={<Loader />}
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence>
            {data.projects.map((project) => (
              <Card
                key={project.slug}
                className="h-[40.625rem]"
                project={project}
              />
            ))}
          </AnimatePresence>
        </ul>
      </InfiniteScroll>

      {!firstLoaded && loading && <Loader />}

      {data.hasNextPage && !loading && (
        <Button
          variant="outline"
          disabled={loading}
          className="justify-center max-w-md w-full lg:w-fit mt-16 mx-auto"
          onClick={onClick}
        >
          Carregar mais
        </Button>
      )}
    </>
  );
};
