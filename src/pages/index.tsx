import type { NextPage } from 'next';
import Head from 'next/head';
import { Whatsapp } from '../components/Whatsapp';

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
    </>
  );
};

export default Home;
