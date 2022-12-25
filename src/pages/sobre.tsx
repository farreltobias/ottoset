import { useRef } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import ogImage from '@public/photos/office.webp';

import { CompanyImages } from '@components/About/CompanyImages';
import { Mission } from '@components/About/Mission';
import { Presentation } from '@components/About/Presentation';
import { SEO } from '@components/About/SEO';

import { images } from '@data/images/sobre';
import {
  diferentials,
  missions,
  services as moreServices,
} from '@data/static/content';
import { expertises } from '@data/static/expertises';
import { services } from '@data/static/services';

const Services = dynamic(
  () => import('@components/About/Services').then(({ Services }) => Services),
  { ssr: false },
);

const MoreServices = dynamic(
  () =>
    import('@components/About/MoreServices').then(
      ({ MoreServices }) => MoreServices,
    ),
  { ssr: false },
);

const Diferentials = dynamic(
  () =>
    import('@components/About/Diferentials').then(
      ({ Diferentials }) => Diferentials,
    ),
  { ssr: false },
);

const Expertises = dynamic(
  () => import('@components/Expertises').then(({ Expertises }) => Expertises),
  { ssr: false },
);

const Materials = dynamic(
  () =>
    import('@components/About/Materials').then(({ Materials }) => Materials),
  { ssr: false },
);

const Sobre: NextPage = () => {
  const ref = useRef<HTMLElement | null>(null);

  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ottoset.com.br';
  const allImages = Object.values(images).flatMap((image) =>
    Object.values(image),
  );

  return (
    <article ref={(el) => (ref.current = el)}>
      <SEO image={ogImage} siteURL={siteURL} pageImages={allImages} />

      {/* About the company, primary content */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-x-32 mt-10 lg:mt-12">
        <Presentation ref={ref} />
        <CompanyImages />
      </div>

      {/* Mission of the company, secondary content */}
      <div className="relative mt-24 lg:mt-16">
        <Mission missions={missions} />
      </div>

      {/* Services, arbitrary content */}
      <Services services={services} />

      {/* More about the company, tertiary content */}
      <MoreServices services={moreServices} />

      {/* Diferentials, quaternary content */}
      <Diferentials diferentials={diferentials} />

      {/* Expertises, arbitrary content */}
      <Expertises className="mt-20 lg:mt-28" expertises={expertises} />

      {/* Other materials, arbitrary content */}
      <Materials />
    </article>
  );
};

export default Sobre;
