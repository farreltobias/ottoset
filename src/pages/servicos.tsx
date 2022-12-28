import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';

import { Overlaid } from '@components/Texts/Overlaid';

import { SEO } from '@seo/servicos';

import { expertises } from '@data/static/expertises';

const Generators = dynamic(() =>
  import('@components/Services/Generators').then(
    ({ Generators }) => Generators,
  ),
);

const Automation = dynamic(() =>
  import('@components/Services/Automation').then(
    ({ Automation }) => Automation,
  ),
);

const Photovoltaic = dynamic(() =>
  import('@components/Services/Photovoltaic').then(
    ({ Photovoltaic }) => Photovoltaic,
  ),
);

const Aviation = dynamic(() =>
  import('@components/Services/Aviation').then(({ Aviation }) => Aviation),
);

const Maintenance = dynamic(() =>
  import('@components/Services/Maintenance').then(
    ({ Maintenance }) => Maintenance,
  ),
);

const Services = dynamic(() =>
  import('@components/Services/Services').then(({ Services }) => Services),
);

const Expertises = dynamic(() =>
  import('@components/Expertises').then(({ Expertises }) => Expertises),
);

const Servicos: NextPage = () => {
  return (
    <article>
      <NextSeo {...SEO} />

      {/* Title */}
      <Overlaid center className="container mx-auto mt-12 lg:mt-12 w-full">
        <Overlaid.Title>Nossos</Overlaid.Title>
        <Overlaid.SubTitle>Serviços</Overlaid.SubTitle>
      </Overlaid>

      {/* Article sections, each one is page content */}
      <Generators />
      <Automation />
      <Photovoltaic />
      <Aviation />
      <Maintenance />

      {/* GMC and UFV services, page content */}
      <Services />

      {/* Expertises, arbitrary content */}
      <Expertises className="mt-12 lg:mt-56" expertises={expertises} />
    </article>
  );
};

export default Servicos;
