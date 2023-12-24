import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { createClient } from 'prismicio';

import logo from '@public/company/logo.png';

import { CustomCareerDocument } from '@components/CareersList/Item';
import { JsonLd } from '@components/CareersList/JsonLd';
import { SEO } from '@components/SEO';
import { Overlaid } from '@components/Texts/Overlaid';

type PageProps = {
  careers: CustomCareerDocument[];
};

const Item = dynamic(() =>
  import('@components/CareersList/Item').then(({ Item }) => Item),
);

const Careers: NextPage<PageProps> = ({ careers }) => {
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ottoset.com.br';
  const { asPath } = useRouter();

  const seoOptions = {
    title: 'Carreiras na Ottoset',
    description:
      'Venha fazer parte da Ottoset, uma empresa que está revolucionando o mercado de energia solar no Brasil.',
    path: asPath,
    siteURL,
  };

  return (
    <article className="container mx-auto mt-12 mb-48 lg:mt-[4.5rem]">
      <SEO options={seoOptions} ogImage={logo} />
      <JsonLd options={seoOptions} careers={careers} />

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
