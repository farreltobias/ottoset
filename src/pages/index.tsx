import type { NextPage } from 'next';
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
};

const Home: NextPage<PageProps> = ({ initialProjects, images }) => {
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

Home.getInitialProps = async ({ req }) => {
  const protocol = req?.headers['x-forwarded-proto'] || 'http';
  const baseUrl = req ? `${protocol}://${req.headers.host}` : '';

  const response = await fetch(`${baseUrl}/api/get-instagram-photos?limit=20`);
  const { data: images } = (await response.json()) as Response;

  const categories = await getAllCategories();

  const allProjectsPage = await projectPager();

  const promises = categories.map((category) => {
    return projectPagerByCategory(category).then((data) => ({
      category,
      data,
    }));
  });

  const projects = await Promise.all(promises);

  const allProjects = {
    category: 'Todos',
    data: allProjectsPage,
  };

  return {
    initialProjects: [allProjects, ...projects],
    images,
  };
};
