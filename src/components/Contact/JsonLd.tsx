import {
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
  options: Options;
  pageImages: string[];
};

export const JsonLd: React.FC<Props> = ({
  options: { siteURL, path, customNames },
  pageImages,
}) => {
  const breadcrumbsProps: BreadCrumbJsonLdProps = {
    itemListElements: getBreadcrumbs({
      siteURL,
      path,
      customNames,
    }),
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
      <ImageJsonLd {...imageProps} />
    </>
  );
};
