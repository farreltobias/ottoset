import {
  ArticleJsonLd,
  ArticleJsonLdProps,
  BreadcrumbJsonLd,
  BreadCrumbJsonLdProps,
  ImageJsonLd,
  ImageJsonLdProps,
} from 'next-seo';

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
  project: ProjectDocument;
};

export const JsonLd: React.FC<Props> = ({
  options: { siteURL, path, customNames, title, description },
  project,
}) => {
  const breadcrumbsProps: BreadCrumbJsonLdProps = {
    itemListElements: getBreadcrumbs({
      siteURL,
      path,
      customNames,
    }),
  };

  const pageImages = [
    project.data.cover.url,
    ...project.data.slices.map(({ primary }) => primary.image.url),
  ].filter((url) => url) as string[];

  const props: ArticleJsonLdProps = {
    url: `${siteURL}${path}`,
    title,
    description,
    images: pageImages,
    datePublished: project.first_publication_date,
    dateModified: project.last_publication_date,
    isAccessibleForFree: true,
    authorName: [
      {
        '@type': 'Organization',
        name: 'Ottoset Energy',
        url: siteURL,
      },
    ],
  };

  const imageProps: ImageJsonLdProps = {
    images: [
      ...pageImages.map((contentUrl) => ({
        contentUrl,
        creator: {
          '@type': 'Organization' as 'Organisation',
          name: 'Ottoset Energy',
        },
      })),
    ],
  };

  return (
    <>
      <BreadcrumbJsonLd {...breadcrumbsProps} />
      <ArticleJsonLd {...props} />
      <ImageJsonLd {...imageProps} />
    </>
  );
};
