import { ToastContainer } from 'react-toastify';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

import { SEO } from '@seo/prestador';

const Header = dynamic(() =>
  import('@components/Provider/Header').then(({ Header }) => Header),
);

const ProviderFrom = dynamic(() =>
  import('@components/Provider/Form').then(({ ProviderFrom }) => ProviderFrom),
);

const Prestador: NextPage = () => {
  return (
    <>
      <NextSeo {...SEO} />

      <ToastContainer />

      <article className="container mx-auto mt-12 mb-24 lg:mt-20 lg:mb-48">
        <Header />
        <ProviderFrom />
      </article>
    </>
  );
};

export default Prestador;
