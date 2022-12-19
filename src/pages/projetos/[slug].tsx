import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { client, createClient } from 'prismicio';
import { ProjectConnectionEdge } from 'src/types/generated/graphql';

import { Article } from '@components/Project/Article';
import { Footer } from '@components/Project/Footer';
import { RelatedProjectType } from '@components/Project/Footer/Button';
import { Header } from '@components/Project/Header';

import { getRelatedProjects } from '@graphql/getRelatedProjects';
import { AFTER_CURSOR, BEFORE_CURSOR, SINGLE_PROJECT } from '@graphql/queries';
import { ProjectQuery } from '@graphql/types';

import { SEO } from '@seo/projetos/projeto';

import { convertProject, Project as ProjectType } from '@utils/convertProject';

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

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  ctx,
) => {
  const { slug } = ctx.params || {};
  const { cursor } = ctx.query as { cursor?: string };

  if (!cursor) {
    const nextClient = createClient({ previewData: ctx.previewData });

    const project = await nextClient.getByUID('project', slug as string);

    return {
      props: {
        project: {
          ...project.data,
          slug: project.uid,
        },
      },
    };
  }

  const { data } = await client.query<ProjectQuery>({
    query: SINGLE_PROJECT,
    variables: {
      slug,
    },
  });

  const graphQLProject = {
    node: data.project,
    cursor: '',
  } as ProjectConnectionEdge;

  const project = convertProject(graphQLProject);

  if (!project) {
    return {
      notFound: true,
    };
  }

  const promises = [BEFORE_CURSOR, AFTER_CURSOR].map((query) =>
    getRelatedProjects({ query, cursor }),
  );

  const [previousProject, nextProject] = await Promise.all(promises);

  return {
    props: {
      project,
      previousProject,
      nextProject,
    },
  };
};
