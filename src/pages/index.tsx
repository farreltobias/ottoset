import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Clients } from '@components/Home/Clients';
import { Energy } from '@components/Home/Energy';
import { Instagram } from '@components/Home/Instagram';
import { Monitor } from '@components/Home/Monitor';
import { Projects } from '@components/Home/Projects';
import { Reach } from '@components/Home/Reach';
import { Services } from '@components/Home/Services';
import { Slider } from '@components/Home/Slider';

import { SEO } from '@seo/home';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo {...SEO} />

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
