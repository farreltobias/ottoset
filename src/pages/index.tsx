import type { NextPage } from 'next';
import Head from 'next/head';

import { Carousel } from '@components/Carousel';
import { Energy } from '@components/Home/Energy';
import { Monitor } from '@components/Home/Monitor';
import { Clients } from '@components/Home/Clients';
import { Service } from '@components/Home/Service';
import { Instagram } from '@components/Home/Instagram';

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

      <Energy />
      <Monitor />
      <Clients />
      <Service />

      <Instagram />
    </>
  );
};

export default Home;
