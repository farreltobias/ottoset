import {
  BreadcrumbJsonLd,
  BreadCrumbJsonLdProps,
  JobPostingJsonLd,
  JobPostingJsonLdProps,
} from 'next-seo';

import type { Content } from '@prismicio/client';

import { address } from '@data/static/ottoset';

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
  career: Content.CareerDocument;
};

export const JsonLd: React.FC<Props> = ({
  options: { siteURL, path, customNames, title, description },
  career,
}) => {
  const breadcrumbsProps: BreadCrumbJsonLdProps = {
    itemListElements: getBreadcrumbs({
      siteURL,
      path,
      customNames,
    }),
  };

  const props: JobPostingJsonLdProps = {
    title,
    datePosted: career.first_publication_date,
    description,
    hiringOrganization: {
      name: 'Ottoset Energy',
      sameAs: siteURL,
    },
    jobLocation: {
      addressCountry: address.country,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zipCode,
      streetAddress: address.street,
    },
    applicantLocationRequirements: 'BR',
  };

  return (
    <>
      <BreadcrumbJsonLd {...breadcrumbsProps} />
      <JobPostingJsonLd {...props} />
    </>
  );
};
