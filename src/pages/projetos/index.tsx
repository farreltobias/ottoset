import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { List } from '@components/Projects/List';
import { Overlaid } from '@components/Texts/Overlaid';

import { projectPager, ProjectsPage } from '@graphql/projectPager';

import { SEO } from '@seo/projetos';

type PageProps = {
  data: ProjectsPage;
};

const Projetos: NextPage<PageProps> = ({ data: initialData }) => {
  return (
    <article className="container mx-auto mt-12">
      <NextSeo {...SEO} />

      <Overlaid center>
        <Overlaid.Title>Nossos</Overlaid.Title>
        <Overlaid.SubTitle>Projetos</Overlaid.SubTitle>
      </Overlaid>

      <section className="mb-28 mt-11 md:mt-14 lg:mt-14">
        <List initialData={initialData} />
      </section>
    </article>
  );
};

export default Projetos;

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const data = await projectPager();

  return {
    props: {
      data,
    },
  };
};
