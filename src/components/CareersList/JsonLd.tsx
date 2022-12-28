import {
  BreadcrumbJsonLd,
  BreadCrumbJsonLdProps,
  CarouselJsonLd,
  CarouselJsonLdProps,
} from 'next-seo';

import { getBreadcrumbs } from '@utils/getBreadcrumbs';

import { CustomCareerDocument } from './Item';

type Options = {
  title: string;
  description: string;
  path: string;
  siteURL: string;
  customNames?: Record<string, string>;
};

type Props = {
  options: Options;
  careers: CustomCareerDocument[];
};

export const JsonLd: React.FC<Props> = ({
  options: { siteURL, path, customNames },
  careers,
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
    data: careers.map((career) => ({
      '@type': 'JobPosting',
      url: `${siteURL}/carreiras/${career.uid}`,
    })),
  };

  return (
    <>
      <BreadcrumbJsonLd {...breadcrumbsProps} />
      <CarouselJsonLd {...props} />
    </>
  );
};
