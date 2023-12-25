import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import type { Content } from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';

import logo from '@public/company/logo.png';

import { JsonLd } from '@components/Career/JsonLd';
import { SEO } from '@components/SEO';

const ToastContainer = dynamic(
  () => import('react-toastify').then(({ ToastContainer }) => ToastContainer),
  {
    ssr: false,
  },
);

const CareerForm = dynamic(() =>
  import('@components/Career/Form').then(({ CareerForm }) => CareerForm),
);

const Header = dynamic(() =>
  import('@components/Career/Header').then(({ Header }) => Header),
);

type PageProps = {
  career: Content.CareerDocument;
};

const Career: NextPage<PageProps> = ({ career }) => {
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ottoset.com.br';
  const { asPath } = useRouter();

  const titleText = prismicH.asText(career.data.title);

  const seoOptions = {
    title: `${titleText} - Ottoset Energy`,
    description: `Se candidate para a vaga de ${titleText}. Venha fazer parte da Ottoset, uma empresa que está revolucionando o mercado de energia solar no Brasil.`,
    path: asPath,
    siteURL,
  };

  return (
    <>
      <SEO options={seoOptions} ogImage={logo} />
      <JsonLd options={seoOptions} career={career} />

      <ToastContainer />

      <article className="container mx-auto mt-12 mb-36 lg:mt-20 lg:mb-48">
        <Header career={career} />
        <CareerForm career={career} />
      </article>
    </>
  );
};

export default Career;

export const getStaticProps: GetStaticProps<PageProps> = async ({
  previewData,
  params,
}) => {
  const { slug } = (params || {}) as { slug?: string };

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const { createClient } = await import('src/prismicio');

  const nextClient = createClient({ previewData });
  const career = await nextClient.getByUID('career', slug).catch(() => null);

  if (!career) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      career,
    },
  };
};

export async function getStaticPaths() {
  const { createClient } = await import('src/prismicio');

  const nextClient = createClient();

  const pages = await nextClient.getAllByType('career');
  const { asLink } = await import('@prismicio/helpers');

  return {
    paths: pages.map((page) => asLink(page)),
    fallback: false,
  };
}
