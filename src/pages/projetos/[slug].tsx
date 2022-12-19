import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { createClient } from 'prismicio';

import { Article } from '@components/Project/Article';
import { Footer } from '@components/Project/Footer';
import { RelatedProjectType } from '@components/Project/Footer/Button';
import { Header } from '@components/Project/Header';

import { getRelatedProjects } from '@graphql/getRelatedProjects';
import { AFTER_CURSOR, BEFORE_CURSOR } from '@graphql/queries';

import { SEO } from '@seo/projetos/projeto';

import { Project as ProjectType } from '@utils/convertProject';

type PageProps = {
  project: ProjectType;
  previousProject?: RelatedProjectType;
  nextProject?: RelatedProjectType;
};

const Project: NextPage<PageProps> = ({
  project,
  nextProject,
  previousProject,
}) => {
  return (
    <article className="container mx-auto lg:mt-8">
      <NextSeo {...SEO(project)} />

      <Header />
      <Article project={project} />
      <Footer previousProject={previousProject} nextProject={nextProject} />
    </article>
  );
};

export default Project;

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  params,
  query,
  previewData,
}) => {
  const { slug } = params as { slug: string };
  const { cursor } = query as { cursor?: string };

  const nextClient = createClient({ previewData });

  const project = await nextClient.getByUID('project', slug).catch(() => null);

  if (!project) {
    return {
      notFound: true,
    };
  }

  if (!cursor) {
    return {
      props: {
        project: {
          ...project.data,
          slug: project.uid,
        },
      },
    };
  }

  const promises = [BEFORE_CURSOR, AFTER_CURSOR].map((query) =>
    getRelatedProjects({ query, cursor }),
  );

  const [previousProject, nextProject] = await Promise.all(promises);

  return {
    props: {
      project: {
        ...project.data,
        slug: project.uid,
      },
      previousProject,
      nextProject,
    },
  };
};
