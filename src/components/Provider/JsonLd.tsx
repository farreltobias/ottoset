import {
  BreadcrumbJsonLd,
  BreadCrumbJsonLdProps,
  JobPostingJsonLd,
  JobPostingJsonLdProps,
} from 'next-seo';

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
};

export const JsonLd: React.FC<Props> = ({
  options: { description, siteURL, title, path, customNames },
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
    datePosted: new Date('2022-12-25T20:00:00+03:00').toISOString(),
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
