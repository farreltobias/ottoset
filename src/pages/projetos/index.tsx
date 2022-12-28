import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

import { Query } from '@prismicio/types';

import { createClient } from 'prismicio';

import { Overlaid } from '@components/Texts/Overlaid';

import { SEO } from '@seo/projetos';

import { projectCard } from '@utils/graphQueries';

import { ProjectDocument } from '.slicemachine/prismicio';

const List = dynamic(() =>
  import('@components/Projects/List').then(({ List }) => List),
);

type PageProps = {
  projects: Query<ProjectDocument>;
};

const Projetos: NextPage<PageProps> = ({ projects }) => {
  return (
    <article className="container mx-auto mt-12">
      <NextSeo {...SEO} />

      <Overlaid center>
        <Overlaid.Title>Nossos</Overlaid.Title>
        <Overlaid.SubTitle>Projetos</Overlaid.SubTitle>
      </Overlaid>

      <section className="mb-28 mt-11 md:mt-14 lg:mt-14">
        <List initialData={projects} />
      </section>
    </article>
  );
};

export default Projetos;

export const getStaticProps: GetStaticProps<PageProps> = async ({
  previewData,
}) => {
  const nextClient = createClient({ previewData });

  const projects = await nextClient.getByType('project', {
    graphQuery: projectCard,
    orderings: {
      field: 'document.last_publication_date',
      direction: 'desc',
    },
    pageSize: 6,
    page: 1,
  });

  return {
    props: {
      projects,
    },
  };
};
