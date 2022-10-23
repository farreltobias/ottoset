import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { About } from '@components/About/About';

const Sobre: NextPage = () => {
  return (
    <>
      <NextSeo />

      <About />
    </>
  );
};

export default Sobre;
