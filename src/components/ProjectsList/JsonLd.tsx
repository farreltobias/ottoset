import {
  BreadcrumbJsonLd,
  BreadCrumbJsonLdProps,
  CarouselJsonLd,
  CarouselJsonLdProps,
  ImageJsonLd,
  ImageJsonLdProps,
} from 'next-seo';

import { Query } from '@prismicio/types';

import { getBreadcrumbs } from '@utils/getBreadcrumbs';

import { ProjectDocument } from '.slicemachine/prismicio';

type Options = {
  title: string;
  description: string;
  path: string;
  siteURL: string;
  customNames?: Record<string, string>;
};

type Props = {
  options: Options;
  projects: Query<ProjectDocument>['results'];
};

export const JsonLd: React.FC<Props> = ({
  options: { siteURL, path, customNames },
  projects,
}) => {
  const breadcrumbsProps: BreadCrumbJsonLdProps = {
    itemListElements: getBreadcrumbs({
      siteURL,
      path,
      customNames,
    }),
  };

  const props: CarouselJsonLdProps = {
    ofType: 'default',
    data: projects.map((project) => ({
      '@type': 'Article',
      url: `${siteURL}/projetos/${project.uid}`,
    })),
  };

  const imageProps: ImageJsonLdProps = {
    images: projects
      .filter(({ data }) => data.cover.url)
      .map(({ data }) => ({
        contentUrl: data.cover.url as string,
        creator: {
          '@type': 'Organization' as 'Organisation',
          name: 'Ottoset Energy',
        },
      })),
  };

  return (
    <>
      <BreadcrumbJsonLd {...breadcrumbsProps} />
      <CarouselJsonLd {...props} />
      <ImageJsonLd {...imageProps} />
    </>
  );
};
