import { GetStaticProps, NextPage } from 'next';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

import { Query } from '@prismicio/types';

import { createClient } from 'prismicio';

import { JsonLd } from '@components/ProjectsList/JsonLd';
import { List } from '@components/ProjectsList/List';
import { SEO } from '@components/SEO';
import { Overlaid } from '@components/Texts/Overlaid';

import { projectCard } from '@utils/graphQueries';

import { ProjectDocument } from '.slicemachine/prismicio';

type PageProps = {
  projects: Query<ProjectDocument>;
};

const Projetos: NextPage<PageProps> = ({ projects }) => {
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ottoset.com.br';
  const { asPath } = useRouter();

  const { url, dimensions } = projects.results[0].data.cover;

  const image = {
    src: url,
    width: dimensions?.width,
    height: dimensions?.height,
  };

  const seoOptions = {
    title: 'Projetos da Ottoset Energy',
    description:
      'Veja todos os projetos da Ottoset Energy, desde os mais recentes até os mais antigos. Acompanhe o nosso crescimento e a nossa evolução. A Ottoset Energy é uma empresa de energia solar fotovoltaica, que atua no mercado de energia renovável desde 2015.',
    path: asPath,
    siteURL,
  };

  return (
    <article className="container mx-auto mt-12">
      <SEO options={seoOptions} ogImage={image as StaticImageData} />
      <JsonLd options={seoOptions} projects={projects.results} />

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
