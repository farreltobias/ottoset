import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

import * as prismic from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';

import { createClient } from 'prismicio';

import { SEO } from '@seo/projetos/projeto';

import { ProjectDocument } from '.slicemachine/prismicio';

const Header = dynamic(() =>
  import('@components/Projects/Project/Header').then(({ Header }) => Header),
);

const Article = dynamic(() =>
  import('@components/Projects/Project/Article').then(({ Article }) => Article),
);

const Footer = dynamic(() =>
  import('@components/Projects/Project/Footer').then(({ Footer }) => Footer),
);

type PageProps = {
  project: ProjectDocument;
  previousProjectUrl?: string | null;
  nextProjectUrl?: string | null;
};

const Project: NextPage<PageProps> = ({
  project,
  nextProjectUrl,
  previousProjectUrl,
}) => {
  return (
    <article className="container mx-auto lg:mt-8">
      <NextSeo {...SEO(project)} />

      <Header />
      <Article project={project} />
      <Footer
        previousProject={previousProjectUrl}
        nextProject={nextProjectUrl}
      />
    </article>
  );
};

export default Project;

export const getStaticProps: GetStaticProps<PageProps> = async ({
  params,
  previewData,
}) => {
  const { slug } = params as { slug: string };

  const nextClient = createClient({ previewData });

  const project = await nextClient.getByUID('project', slug);

  const dates = [
    'document.last_publication_date',
    project.last_publication_date,
  ] as [string, string];

  const predicateProject = prismic.predicate.at('document.type', 'project');
  const before = {
    predicate: prismic.predicate.dateAfter(...dates),
    direction: 'asc' as const,
  };
  const after = {
    predicate: prismic.predicate.dateBefore(...dates),
    direction: 'desc' as const,
  };

  const promises = [before, after].map(({ predicate, direction }) =>
    nextClient.get({
      fetch: ['project.category'],
      orderings: {
        field: 'document.last_publication_date',
        direction,
      },
      predicates: [predicateProject, predicate],
      pageSize: 1,
    }),
  );

  const [{ results: beforeProject }, { results: afterProject }] =
    await Promise.all(promises);

  return {
    props: {
      project,
      previousProjectUrl: prismicH.asLink(beforeProject[0]),
      nextProjectUrl: prismicH.asLink(afterProject[0]),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const nextClient = createClient();

  const projects = await nextClient.getAllByType('project');

  return {
    paths: projects.map((project) => prismicH.asLink(project)) as string[],
    fallback: false,
  };
};
