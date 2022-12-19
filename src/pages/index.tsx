import type { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Areas } from '@components/Areas';
import { Clients } from '@components/Home/Clients';
import { Energy } from '@components/Home/Energy';
import { Instagram } from '@components/Home/Instagram';
import { Monitor } from '@components/Home/Monitor';
import { Projects } from '@components/Home/Projects';
import { ProjectsPageByCategory } from '@components/Home/Projects/Carousel';
import { Reach } from '@components/Home/Reach';
import { Slider } from '@components/Home/Slider';

import { getAllCategories } from '@graphql/getAllCategories';
import { projectPager } from '@graphql/projectPager';
import { projectPagerByCategory } from '@graphql/projectPagerByCategory';

import { SEO } from '@seo/home';

import { Response } from './api/get-instagram-photos';

type PageProps = {
  initialProjects: ProjectsPageByCategory[];
  images: Response['data'];
  extra: {
    instagramTime: number;
    projectsTime: number;
  };
};

const Home: NextPage<PageProps> = ({ initialProjects, images, extra }) => {
  console.log('Instagram Time:', extra.instagramTime);
  console.log('Projects Time:', extra.projectsTime);

  return (
    <>
      <NextSeo {...SEO} />

      <Slider />
      <Areas />
      <Energy />
      <Monitor />
      <Projects initialData={initialProjects} />
      <Clients />
      <Reach />
      <Instagram images={images} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<PageProps> = async ({
  req,
  res,
}) => {
  const SECONDS_IN_10_MINUTES = 60 * 10;
  const SECONDS_IN_A_DAY = 60 * 60 * 24;

  const INSTAGRAM_LIMIT = 12;

  let instagramTime = performance.now();

  res.setHeader(
    'Cache-Control',
    `public, s-maxage=${SECONDS_IN_10_MINUTES}, stale-while-revalidate=${SECONDS_IN_A_DAY}`,
  );

  const protocol = req?.headers['x-forwarded-proto'] || 'http';
  const baseUrl = req ? `${protocol}://${req.headers.host}` : '';

  const response = await fetch(
    `${baseUrl}/api/get-instagram-photos?limit=${INSTAGRAM_LIMIT}`,
  );
  const { data: images } = (await response.json()) as Response;

  instagramTime = performance.now() - instagramTime;

  let projectsTime = performance.now();

  const categories = await getAllCategories();

  const allProjectsPage = await projectPager();

  const promises = categories.map(async (category) => {
    return projectPagerByCategory(category).then((data) => ({
      category,
      data,
    }));
  });

  const projects = await Promise.all(promises);

  projectsTime = performance.now() - projectsTime;

  const allProjects = {
    category: 'Todos',
    data: allProjectsPage,
  };

  return {
    props: {
      initialProjects: [allProjects, ...projects],
      images,
      extra: {
        instagramTime,
        projectsTime,
      },
    },
  };
};
