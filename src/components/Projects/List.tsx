import { useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { Button } from '@components/Button';
import { Card } from '@components/Card';
import { Spinner } from '@components/Spinner';

import { projectPager, ProjectsPage } from '@graphql/projectPager';

type Props = {
  initialData: ProjectsPage;
};

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
  };

  return (
    <>
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

      {data.hasNextPage && (
        <Button
          variant="outline"
          disabled={loading}
          className="justify-center max-w-md w-full lg:w-fit mt-16 mx-auto"
          onClick={onClick}
        >
          {loading ? <Spinner color="gray" /> : 'Carregar mais'}
        </Button>
      )}
    </>
  );
};
