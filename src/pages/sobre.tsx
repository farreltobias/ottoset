import { useRef } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

import ogImage from '@public/photos/office.webp';

import { JsonLd } from '@components/About/JsonLd';
import { Presentation } from '@components/About/Presentation';
import { SEO } from '@components/SEO';

import { images } from '@data/images/sobre';
import {
  diferentials,
  missions,
  services as moreServices,
} from '@data/static/content';
import { expertises } from '@data/static/expertises';
import { services } from '@data/static/services';

const CompanyImages = dynamic(() =>
  import('@components/About/CompanyImages').then(
    ({ CompanyImages }) => CompanyImages,
  ),
);

const Mission = dynamic(() =>
  import('@components/About/Mission').then(({ Mission }) => Mission),
);

const Services = dynamic(() =>
  import('@components/About/Services').then(({ Services }) => Services),
);

const MoreServices = dynamic(() =>
  import('@components/About/MoreServices').then(
    ({ MoreServices }) => MoreServices,
  ),
);

const Diferentials = dynamic(() =>
  import('@components/About/Diferentials').then(
    ({ Diferentials }) => Diferentials,
  ),
);

const Expertises = dynamic(() =>
  import('@components/Expertises').then(({ Expertises }) => Expertises),
);

const Materials = dynamic(() =>
  import('@components/About/Materials').then(({ Materials }) => Materials),
);

const Sobre: NextPage = () => {
  const ref = useRef<HTMLElement | null>(null);

  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ottoset.com.br';
  const { asPath } = useRouter();

  const seoOptions = {
    title: 'Sobre a Ottoset Energy',
    description:
      'Conheça a Ottoset, uma empresa especializada em soluções em energia que oferece soluções para o seu negócio. Acesse e saiba mais!',
    path: asPath,
    siteURL,
  };

  const pageImages = Object.values(images).flatMap(
    (image: Record<string, StaticImageData>) =>
      Object.values(image).map(({ src }) => src),
  );

  return (
    <article ref={(el) => (ref.current = el)}>
      <SEO options={seoOptions} ogImage={ogImage} />
      <JsonLd options={seoOptions} pageImages={pageImages} />

      {/* About the company, primary content */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-x-32 mt-10 lg:mt-12">
        <Presentation ref={ref} />
        <CompanyImages />
      </div>

      {/* Mission of the company, secondary content */}
      <Mission missions={missions} />

      {/* Services, arbitrary content */}
      <Services services={services} />

      {/* More about the company, tertiary content */}
      <MoreServices services={moreServices} />

      {/* Diferentials, quaternary content */}
      <Diferentials diferentials={diferentials} />

      {/* Expertises, arbitrary content */}
      <Expertises className="mt-20 lg:mt-24" expertises={expertises} />

      {/* Other materials, arbitrary content */}
      <Materials />
    </article>
  );
};

export default Sobre;
