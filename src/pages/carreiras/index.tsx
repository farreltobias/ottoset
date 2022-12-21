import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { createClient } from 'prismicio';

import { CustomCareerDocument, Item } from '@components/careers/Item';
import { Overlaid } from '@components/Texts/Overlaid';

import { SEO } from '@seo/carreiras';

type PageProps = {
  careers: CustomCareerDocument[];
};

const Careers: NextPage<PageProps> = ({ careers }) => {
  return (
    <>
      <NextSeo {...SEO} />

      <section className="container mx-auto mt-12 mb-48 lg:mt-[4.5rem]">
        <Overlaid center>
          <Overlaid.Title>Carreiras</Overlaid.Title>
          <Overlaid.SubTitle>na Ottoset</Overlaid.SubTitle>
        </Overlaid>

        <ul className="mt-11">
          {careers.map(({ data, uid }) => (
            <Item key={uid} title={data.title} slug={uid} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Careers;

export const getStaticProps: GetStaticProps<PageProps> = async ({
  previewData,
}) => {
  const nextClient = createClient({ previewData });

  const careers = (await nextClient
    .getAllByType('career', {
      fetch: ['career.title', 'career.slug'],
    })
    .catch(() => [])) as CustomCareerDocument[];

  if (!careers.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      careers,
    },
  };
};
