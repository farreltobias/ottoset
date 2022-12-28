import {
  ArticleJsonLd,
  ArticleJsonLdProps,
  BreadcrumbJsonLd,
  BreadCrumbJsonLdProps,
  ImageJsonLd,
  ImageJsonLdProps,
} from 'next-seo';

import { getBreadcrumbs } from '@utils/getBreadcrumbs';

type Options = {
  title: string;
  description: string;
  path: string;
  siteURL: string;
  customNames?: Record<string, string>;
};

type Props = {
  pageImages: string[];
  options: Options;
};

export const JsonLd: React.FC<Props> = ({
  pageImages,
  options: { description, siteURL, title, path, customNames },
}) => {
  const breadcrumbsProps: BreadCrumbJsonLdProps = {
    itemListElements: getBreadcrumbs({
      siteURL,
      path,
      customNames,
    }),
  };

  const props: ArticleJsonLdProps = {
    url: `${siteURL}${path}`,
    title,
    description,
    images: pageImages,
    datePublished: new Date('2022-12-25T20:00:00+03:00').toISOString(),
    isAccessibleForFree: true,
    authorName: [
      {
        type: 'Organization',
        name: 'Ottoset Energy',
        url: siteURL,
      },
    ],
  };

  const imageProps: ImageJsonLdProps = {
    images: pageImages.map((contentUrl) => ({
      contentUrl,
      creator: {
        '@type': 'Organization' as 'Organisation',
        name: 'Ottoset Energy',
      },
    })),
  };

  return (
    <>
      <BreadcrumbJsonLd {...breadcrumbsProps} />
      <ArticleJsonLd {...props} />
      <ImageJsonLd {...imageProps} />
    </>
  );
};
