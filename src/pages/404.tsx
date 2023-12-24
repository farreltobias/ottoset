import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import logo from '@public/company/logo.png';

import { Button } from '@components/Button';
import { SEO } from '@components/SEO';

const Custom404: NextPage = () => {
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ottoset.com.br';
  const { asPath } = useRouter();

  const seoOptions = {
    title: 'Página não encontrada',
    description: 'Desculpe não encontramos o que você procurava',
    path: asPath,
    siteURL,
  };

  return (
    <>
      <SEO options={seoOptions} ogImage={logo} />

      <article className="pt-12 pb-28 lg:pt-[12.5rem] lg:pb-[9.75rem] flex items-center justify-center bg-[url('/backgrounds/not-found.svg')] bg-cover bg-no-repeat bg-center">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="text-center mb-8 font-title leading-125 text-[1.75rem] sm:text-[2rem] lg:text-[4rem] lg:leading-120 xl:mb-16 xl:px-20 xl:text-7xl xl:leading-120 font-extrabold">
            Desculpe não encontramos o que você procurava
          </h1>
          <Button
            variant="outline"
            className="flex items-center justify-center font-title w-full sm:w-fit"
          >
            <Link href="/" className="text-base">
              Voltar para a página inicial
            </Link>
          </Button>
        </div>
      </article>
    </>
  );
};

export default Custom404;
