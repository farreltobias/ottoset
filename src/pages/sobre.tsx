import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { About } from '@components/About/About';
import { Mission } from '@components/About/Mission';

import { SEO } from '@seo/sobre';
import { Services } from '@components/About/Services';
import { More } from '@components/About/More';
import { Diferentials } from '@components/About/Diferentials';
import { Expertises } from '@components/About/Expertises';
import { Materials } from '@components/About/Materials';

const Sobre: NextPage = () => {
  return (
    <>
      <NextSeo {...SEO} />

      <About />
      <Mission />
      <Services />
      <More />
      <Diferentials />
      <Expertises />
      <Materials />
    </>
  );
};

export default Sobre;
