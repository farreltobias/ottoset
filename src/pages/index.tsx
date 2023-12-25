import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

import type { Content } from '@prismicio/client';
import { filter } from '@prismicio/client';
import { Query } from '@prismicio/types';

import slicemachine from 'slicemachine.config.json';
import { createClient } from 'src/prismicio';

import logo from '@public/company/logo.png';

import { JsonLd } from '@components/Home/JsonLd';
import { SEO } from '@components/SEO';

import { images } from '@data/images/home';
import { reasons } from '@data/static/content';
import { services } from '@data/static/services';

import { projectCard } from '@utils/graphQueries';

const SWRProvider = dynamic(
  () => import('@contexts/SWRProvider').then(({ SWRProvider }) => SWRProvider),
  { ssr: false },
);

const Slider = dynamic(() =>
  import('@components/Home/Slider').then(({ Slider }) => Slider),
);

const Areas = dynamic(() =>
  import('@components/Areas').then(({ Areas }) => Areas),
);

const Energy = dynamic(() =>
  import('@components/Home/Energy').then(({ Energy }) => Energy),
);

const WhyUs = dynamic(() =>
  import('@components/Home/WhyUs').then(({ WhyUs }) => WhyUs),
);

const Projects = dynamic(() =>
  import('@components/Home/Projects').then(({ Projects }) => Projects),
);

const Clients = dynamic(() =>
  import('@components/Home/Clients').then(({ Clients }) => Clients),
);

const Reach = dynamic(() =>
  import('@components/Home/Reach').then(({ Reach }) => Reach),
);

const Instagram = dynamic(() =>
  import('@components/Home/Instagram').then(({ Instagram }) => Instagram),
);

type CategoryOptions =
  | 'Tudo'
  | Exclude<Content.ProjectDocumentData['category'], null>;

export type ProjectsByCategory = {
  category: CategoryOptions;
  data: Query<Content.ProjectDocument>;
};

type PageProps = {
  projectsByCategory: ProjectsByCategory[];
  carousel: Content.CarouselDocument;
};

const Home: NextPage<PageProps> = ({ projectsByCategory, carousel }) => {
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ottoset.com.br';
  const { asPath } = useRouter();

  const seoOptions = {
    description:
      'A Ottoset é uma empresa de engenharia e consultoria especializada em soluções em energia, com foco em energia solar, energia eólica, energia hídrica, energia de biomassa e energia fotovoltaica.',
    path: asPath,
    siteURL,
  };

  const pageImages = Object.values(images).flatMap(
    (image: Record<string, StaticImageData>) =>
      Object.values(image).map(({ src }) => src),
  );

  return (
    <article>
      <SEO options={seoOptions} ogImage={logo} />
      <JsonLd pageImages={pageImages} />

      {/* Slider Carousel, arbitrary content */}
      <Slider carousel={carousel} />

      {/* Areas of services, arbitrary content */}
      <Areas services={services} />

      {/* Energy, primary content */}
      <Energy />

      {/* Why us, secondary content */}
      <WhyUs reasons={reasons} />

      {/* Projects Carousel, arbitrary content */}
      <Projects initialData={projectsByCategory} />

      {/* Clients, tertiary content */}
      <Clients />

      {/* Reach, quaternary content */}
      <Reach />

      {/* Insagram photos, arbitrary content */}
      <SWRProvider>
        <Instagram />
      </SWRProvider>
    </article>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async ({
  previewData,
}) => {
  const { CUSTOM_TYPES_API_KEY } = process.env;

  const nextClient = createClient({ previewData });

  const response = await fetch(
    `${slicemachine.customTypeApiEndpoint}/customtypes/project`,
    {
      headers: {
        'Content-Type': 'application/json',
        repository: 'ottoset',
        Authorization: `Bearer ${CUSTOM_TYPES_API_KEY}`,
      },
    },
  );

  const data = await response.json();

  const CATEGORIES: CategoryOptions[] = [
    'Tudo',
    ...data.json.Main.category.config.options,
  ];

  const promises = CATEGORIES.map((category) =>
    nextClient
      .getByType('project', {
        graphQuery: projectCard,
        predicates:
          category === 'Tudo'
            ? []
            : [filter.at('my.project.category', category)],
        orderings: {
          field: 'document.last_publication_date',
          direction: 'desc',
        },
        pageSize: 6,
        page: 1,
      })
      .then((data) => ({
        data,
        category,
      })),
  );

  const projectsByCategory = (await Promise.all(promises)).filter(
    ({ data }) => data.results_size > 0,
  );

  const carousel = await nextClient.getSingle('carousel');

  return {
    props: {
      projectsByCategory,
      carousel,
    },
  };
};

export default Home;
