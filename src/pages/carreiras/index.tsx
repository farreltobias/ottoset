import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

import { createClient } from 'prismicio';

import { CustomCareerDocument } from '@components/Career/Item';
import { Overlaid } from '@components/Texts/Overlaid';

import { SEO } from '@seo/carreiras';

type PageProps = {
  careers: CustomCareerDocument[];
};

const Item = dynamic(() =>
  import('@components/Career/Item').then(({ Item }) => Item),
);

const Careers: NextPage<PageProps> = ({ careers }) => {
  return (
    <article className="container mx-auto mt-12 mb-48 lg:mt-[4.5rem]">
      <NextSeo {...SEO} />

      <Overlaid center>
        <Overlaid.Title>Carreiras</Overlaid.Title>
        <Overlaid.SubTitle>na Ottoset</Overlaid.SubTitle>
      </Overlaid>

      <ul className="mt-11">
        {careers.map(({ data, uid }) => (
          <Item key={uid} title={data.title} slug={uid} />
        ))}
      </ul>
    </article>
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
