import type { NextPage } from 'next';
import Head from 'next/head';

import { Energy } from '@components/Home/Energy';
import { Monitor } from '@components/Home/Monitor';
import { Clients } from '@components/Home/Clients';
import { Reach } from '@components/Home/Reach';
import { Instagram } from '@components/Home/Instagram';
import { Projects } from '@components/Home/Projects';
import { Slider } from '@components/Home/Slider';
import { Services } from '@components/Home/Services';

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

      <Slider />
      <Services />
      <Energy />
      <Monitor />
      <Projects />
      <Clients />
      <Reach />
      <Instagram />
    </>
  );
};

export default Home;
