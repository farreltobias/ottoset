import { ToastContainer } from 'react-toastify';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import logo from '@public/company/logo.png';

import { JsonLd } from '@components/Provider/JsonLd';
import { SEO } from '@components/SEO';

const Header = dynamic(() =>
  import('@components/Provider/Header').then(({ Header }) => Header),
);

const ProviderFrom = dynamic(() =>
  import('@components/Provider/Form').then(({ ProviderFrom }) => ProviderFrom),
);

const Prestador: NextPage = () => {
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ottoset.com.br';
  const { asPath } = useRouter();

  const seoOptions = {
    title: 'Seja um prestador de serviços da Ottoset Energy',
    description:
      'A Ottoset é uma empresa de engenharia e consultoria especializada em soluções em energia, com foco em energia solar, energia eólica, energia hídrica, energia de biomassa e energia fotovoltaica.',
    path: asPath,
    siteURL,
  };

  return (
    <>
      <SEO options={seoOptions} ogImage={logo} />
      <JsonLd options={seoOptions} />

      <ToastContainer />

      <article className="container mx-auto mt-12 mb-24 lg:mt-20 lg:mb-48">
        <Header />
        <ProviderFrom />
      </article>
    </>
  );
};

export default Prestador;
