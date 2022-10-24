import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Energy } from '@components/Home/Energy';
import { Monitor } from '@components/Home/Monitor';
import { Clients } from '@components/Home/Clients';
import { Reach } from '@components/Home/Reach';
import { Instagram } from '@components/Home/Instagram';
import { Projects } from '@components/Home/Projects';
import { Slider } from '@components/Home/Slider';
import { Services } from '@components/Home/Services';

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
