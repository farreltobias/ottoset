import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Back from '@public/navigation/double-arrow-left.svg';

import { Button } from '@components/Button';
import { Title } from '@components/Texts';

import { SEO } from '@seo/projetos/projeto';

import { Project as ProjectType, projects } from '@data/static/projects';

type ProjectProps = {
  project: ProjectType;
};

const Project: NextPage<ProjectProps> = ({ project }) => {
  const { order } = project;

  const { slug: nextProjectSlug } =
    projects.find(({ order: projectOrder }) => projectOrder === order + 1) ||
    {};
  const { slug: previousProjectSlug } =
    projects.find(({ order: projectOrder }) => projectOrder === order - 1) ||
    {};

  return (
    <>
      <NextSeo {...SEO(project)} />

      <section className="container mx-auto lg:mt-8">
        <Link
          href="/projetos"
          className="flex items-center gap-3 lg:gap-4 w-fit group"
        >
          <Button className="p-3" group>
            <Back className="fill-neutral" />
          </Button>
          <Button variant="link" group>
            Voltar
          </Button>
        </Link>

        <Title largeVariant="h1" variant="h3" className="mt-8 lg:mt-6" center>
          {project.title}
        </Title>

        <div className="flex w-full justify-between mt-6 mb-8 lg:mt-8 lg:mb-12">
          {!previousProjectSlug ? (
            <Button disabled={!previousProjectSlug} variant="link">
              Anterior
            </Button>
          ) : (
            <Link href={`/projetos/${previousProjectSlug}`}>
              <Button disabled={!previousProjectSlug} variant="link">
                Anterior
              </Button>
            </Link>
          )}

          {!nextProjectSlug ? (
            <Button disabled={!nextProjectSlug} variant="link">
              Próximo
            </Button>
          ) : (
            <Link href={`/projetos/${nextProjectSlug}`}>
              <Button disabled={!nextProjectSlug} variant="link">
                Próximo
              </Button>
            </Link>
          )}
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<ProjectProps> = async (
  ctx,
) => {
  const { slug } = ctx.params || {};
  const project = projects.find(
    ({ slug: projectSlug }) => projectSlug === slug,
  );

  if (!slug || !project) {
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
