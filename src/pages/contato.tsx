import { ToastContainer } from 'react-toastify';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

import { SEO } from '@seo/contato';

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
  return (
    <>
      <NextSeo {...SEO} />

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
