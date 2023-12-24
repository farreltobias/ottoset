import { ToastContainer } from 'react-toastify';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

import office from '@public/photos/office-alt.png';

import { JsonLd } from '@components/Contact/JsonLd';
import { SEO } from '@components/SEO';

import { images } from '@data/images/contato';

const Header = dynamic(() =>
  import('@components/Contact/Header').then(({ Header }) => Header),
);

const ContactForm = dynamic(() =>
  import('@components/Contact/Form').then(({ ContactForm }) => ContactForm),
);

const Images = dynamic(() =>
  import('@components/Contact/Images').then(({ Images }) => Images),
);

const Prestador: NextPage = () => {
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ottoset.com.br';
  const { asPath } = useRouter();

  const seoOptions = {
    title: 'Entre com contato com a Ottoset Energy',
    description:
      'A Ottoset é uma empresa de engenharia e consultoria especializada em soluções em energia, com foco em energia solar, energia eólica, energia hídrica, energia de biomassa e energia fotovoltaica. Preencha o formulário para contato e orçamentos',
    path: asPath,
    siteURL,
  };

  const pageImages = Object.values(images).flatMap(
    (image: Record<string, StaticImageData>) =>
      Object.values(image).map(({ src }) => src),
  );

  return (
    <>
      <SEO options={seoOptions} ogImage={office} />
      <JsonLd options={seoOptions} pageImages={pageImages} />

      <ToastContainer />

      <article className="container mx-auto mt-12 lg:mt-20 lg:mb-48">
        <Header />

        <div className="relative flex flex-col lg:flex-row">
          <ContactForm />
          <Images />
        </div>
      </article>
    </>
  );
};

export default Prestador;
