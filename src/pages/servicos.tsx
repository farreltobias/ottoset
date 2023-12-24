import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

import generator from '@public/photos/generator-alt.png';

import { SEO } from '@components/SEO';
import { JsonLd } from '@components/Services/JsonLd';
import { Overlaid } from '@components/Texts/Overlaid';

import { images } from '@data/images/servicos';
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
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ottoset.com.br';
  const { asPath } = useRouter();

  const seoOptions = {
    title: 'Serviços da Ottoset Energy',
    description:
      'Grupo geradores, automação, energia solar fotovoltaica, aviação, manutenção e adequação, serviços GMC e serviços UFV. Conheça os serviços prestados da Ottoset Energy.',
    path: asPath,
    siteURL,
  };

  const pageImages = Object.values(images).flatMap(
    (image: Record<string, StaticImageData>) =>
      Object.values(image).map(({ src }) => src),
  );

  return (
    <article>
      <SEO options={seoOptions} ogImage={generator} />
      <JsonLd options={seoOptions} pageImages={pageImages} />

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
