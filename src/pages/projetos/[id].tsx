import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Title } from '@components/Texts';

import { SEO } from '@seo/projetos/projeto';

import { Project as ProjectType, projects } from '@data/static/projects';

type ProjectProps = {
  project: ProjectType;
};

const Project: NextPage<ProjectProps> = ({ project }) => {
  return (
    <>
      <NextSeo {...SEO(project)} />

      <section className="container mx-auto">
        <Title>{project.title}</Title>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ProjectProps> = async (
  ctx,
) => {
  const { id } = ctx.params || {};
  const project = projects.find(({ id: projectId }) => projectId === id);

  if (!id || !project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

export default Project;
