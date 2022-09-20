import type { NextPage } from 'next';
import Head from 'next/head';

import DoubleArrow from '@public/navigation/double-arrow-right.svg';
import Badge from '@public/logo/badge.svg';
import street from '@public/photos/street.png';

import { Carousel } from '@components/Carousel';
import { Title } from '@components/Text/titles';
import { P2 } from '@components/Text/body';
import { Button } from '@components/Button';
import Link from 'next/link';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ottoset</title>
        <meta
          name="description"
          content="venda, instalação, locação, automação, manutenção e monitoramento remoto"
        />
      </Head>

      {/* <Carousel
        slides={['Slide 1', 'Slide 2', 'Slide 3']}
        options={{ draggable: false }}
      /> */}

      <section className="container mx-auto flex w-full justify-evenly my-40">
        <div className="flex items-center justify-center w-1/2">
          <div className="relative w-full shadow-[-45px_56px_0px_-1px_white,-45px_56px_#818181]">
            <Image
              src={street}
              layout="responsive"
              alt="street with lights"
              placeholder="blur"
            />
            <Badge className="absolute bottom-8 left-8" />
          </div>
        </div>
        <div className="w-1/2 flex justify-center flex-col pl-20 py-[6.75rem]">
          <Title as="h2" variant="h6" className="mb-2">
            20 anos de experiência
          </Title>
          <Title variant="h2" className="mb-4">
            Energia é o que nos move!
          </Title>
          <P2 className="mb-10">
            A Ottoset surgiu da carência do mercado por uma empresa que
            oferecesse qualidade com um preço justo, aos poucos a Ottoset foi se
            estruturando, aumentando a quantidade de geradores, investindo nos
            melhores profissionais e produzindo todo o material necessário para
            se tornar uma das empresas de maior credibilidade em relação a
            energia do pais.
            <br />
            <br />
            Uma equipe de profissionais qualificados, treinados periodicamente
            além de modernos equipamentos, nos habilitam a prestar serviços com
            qualidade, seriedade e pontualidade.
          </P2>

          <Button variant="outline" className="font-title w-fit group">
            <Link href="/contact">
              <a className="flex">
                Seja um cliente Ottoset{' '}
                <DoubleArrow className="fill-primary-600 group-hover:fill-secondary-900" />
              </a>
            </Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto flex w-full justify-evenly my-40">
        <div className="container mx-auto flex flex-col">
          <Title as="h1" variant="display2" className="mb-2 text-center ">
            <span className="block text-neutral shadow-neutral-900 text-stroke-1">
              Monitoramos
            </span>
            <Title
              as="span"
              variant="display4"
              className="block -mt-16 text-neutral-900"
            >
              em tempo real
            </Title>
          </Title>
        </div>
      </section>
    </>
  );
};

export default Home;
