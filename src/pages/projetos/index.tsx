import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { List } from '@components/Projects/List';
import { Overlaid } from '@components/Texts/Overlaid';

import { projectPager, ProjectsPage } from '@graphql/projectPager';

import { SEO } from '@seo/projetos';

type PageProps = {
  data: ProjectsPage;
};

const Projetos: NextPage<PageProps> = ({ data }) => {
  return (
    <article className="container mx-auto mt-12">
      <NextSeo {...SEO} />

      <Overlaid center>
        <Overlaid.Title>Nossos</Overlaid.Title>
        <Overlaid.SubTitle>Projetos</Overlaid.SubTitle>
      </Overlaid>

      <section className="mb-28 mt-11 md:mt-14 lg:mt-14">
        <List initialData={data} />
      </section>
    </article>
  );
};

export default Projetos;

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  res,
}) => {
  const SECONDS_IN_10_MINUTES = 60 * 10;
  const SECONDS_IN_A_DAY = 60 * 60 * 24;

  res.setHeader(
    'Cache-Control',
    `public, s-maxage=${SECONDS_IN_10_MINUTES}, stale-while-revalidate=${SECONDS_IN_A_DAY}`,
  );

  const data = await projectPager();

  return {
    props: {
      data,
    },
  };
};
