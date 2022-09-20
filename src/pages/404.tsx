import Head from 'next/head';
import Link from 'next/link';

import { Title } from '@components/Text/titles';
import { Button } from '@components/Button';

const custom404: React.FC = () => {
  return (
    <>
      <Head>
        <title>Página não encontrada - ottoset</title>
        <meta
          name="description"
          content="venda, instalação, locação, automação, manutenção e monitoramento remoto"
        />
      </Head>

      <div
        className="pt-12 pb-28 lg:pt-[12.5rem] lg:pb-[9.75rem] flex items-center justify-center bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url("not-found-background.svg")',
        }}
      >
        <div className="container flex flex-col items-center justify-center">
          <h1 className="text-center mb-8 font-title leading-125 text-[1.75rem] sm:text-[2rem] lg:text-[4rem] lg:leading-120 xl:mb-16 xl:px-20 xl:text-7xl xl:leading-120 font-extrabold">
            Desculpe não encontramos o que você procurava
          </h1>
          <Button
            variant="outline"
            className="flex items-center justify-center font-title w-full sm:w-fit"
          >
            <Link href="/">
              <a className="text-base">Voltar para a página inicial</a>
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default custom404;
