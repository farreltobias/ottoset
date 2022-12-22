import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

import { createClient } from 'prismicio';

import { SEO } from '@seo/carreiras/carreira';

import type { CareerDocument } from '.slicemachine/prismicio';

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
  career: CareerDocument;
};

const Career: NextPage<PageProps> = ({ career }) => {
  return (
    <>
      <NextSeo {...SEO({ slug: career.uid, ...career.data })} />

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
  const nextClient = createClient();

  const pages = await nextClient.getAllByType('career');
  const { asLink } = await import('@prismicio/helpers');

  return {
    paths: pages.map((page) => asLink(page)),
    fallback: false,
  };
}
