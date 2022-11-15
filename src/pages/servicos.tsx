import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Expertises } from '@components/Expertises';
import { Automation } from '@components/Services/Automation';
import { Aviation } from '@components/Services/Aviation';
import { Generators } from '@components/Services/Generators';
import { Maintenance } from '@components/Services/Maintenance';
import { Photovoltaic } from '@components/Services/Photovoltaic';
import { Services } from '@components/Services/Services';
import { Overlaid } from '@components/Texts/Overlaid';

import { SEO } from '@seo/servicos';

const Servicos: NextPage = () => {
  return (
    <>
      <NextSeo {...SEO} />

      <Overlaid center className="container mx-auto mt-12 lg:mt-12 w-full">
        <Overlaid.Title>Nossos</Overlaid.Title>
        <Overlaid.SubTitle>Serviços</Overlaid.SubTitle>
      </Overlaid>

      <Generators />
      <Automation />
      <Photovoltaic />
      <Aviation />
      <Maintenance />
      <Services />
      <Expertises className="mt-12 lg:mt-56" />
    </>
  );
};

export default Servicos;
