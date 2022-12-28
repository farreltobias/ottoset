import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import logo from '@public/company/logo.png';

import { Button } from '@components/Button';
import { SEO } from '@components/SEO';

const Custom500: NextPage = () => {
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ottoset.com.br';
  const { asPath } = useRouter();

  const seoOptions = {
    title: 'Erro 500 - Ottoset Energy',
    description:
      'Um erro inesperado aconteceu, contate o administrador do site.',
    path: asPath,
    siteURL,
  };

  return (
    <>
      <SEO options={seoOptions} ogImage={logo} />

      <article className="pt-12 pb-28 lg:pt-[12.5rem] lg:pb-[9.75rem] flex items-center justify-center bg-[url('/backgrounds/not-found.svg')] bg-cover bg-no-repeat bg-center">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="text-center mb-8 font-title leading-125 text-[1.75rem] sm:text-[2rem] lg:text-[4rem] lg:leading-120 xl:mb-16 xl:px-20 xl:text-7xl xl:leading-120 font-extrabold">
            Um erro inesperado aconteceu, contate-nos para mais informações.
          </h1>
          <Button
            variant="outline"
            className="flex items-center justify-center font-title w-full sm:w-fit"
          >
            <Link href="/contato" className="text-base">
              Fale conosco
            </Link>
          </Button>
        </div>
      </article>
    </>
  );
};

export default Custom500;
