import {
  BrandJsonLd,
  BrandJsonLdProps,
  LogoJsonLd,
  LogoJsonLdProps,
  OrganizationJsonLd,
  OrganizationJsonLdProps,
  SocialProfileJsonLd,
  SocialProfileJsonLdProps,
  WebPageJsonLd,
  WebPageJsonLdProps,
} from 'next-seo';

import logo from '@public/company/logo.svg';

import { socials } from '@data/socials';
import { address, email, phone, whatsapp } from '@data/static/ottoset';

type Props = {
  siteURL: string;
  lastReviewed: string;
};

export const DefaultJsonLd: React.FC<Props> = ({ siteURL, lastReviewed }) => {
  const logoURL = `${siteURL}/${(logo as any).src}`;

  const webPageProps: WebPageJsonLdProps = {
    description:
      'A Ottoset é uma empresa de engenharia e consultoria especializada em soluções em energia, com foco em energia solar, energia eólica, energia hídrica, energia de biomassa e energia fotovoltaica.',
    id: siteURL,
    lastReviewed,
    reviewedBy: {
      type: 'Organization',
      name: 'Ottoset Energy',
    },
  };

  const organizationProps: OrganizationJsonLdProps = {
    type: 'Corporation',
    id: siteURL,
    logo: logoURL,
    name: 'Ottoset Energy',
    url: siteURL,
    address: {
      streetAddress: `${address.street}, ${address.number}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zipCode,
      addressCountry: 'BR',
    },
    contactPoint: [
      {
        telephone: phone,
        contactType: 'customer service',
        email,
        areaServed: 'BR',
        availableLanguage: 'Portuguese',
      },
      {
        telephone: whatsapp,
        contactType: 'whatsapp',
        areaServed: 'BR',
        availableLanguage: 'Portuguese',
      },
    ],
  };

  const brandProps: BrandJsonLdProps = {
    slogan: 'Soluções em energia.',
    id: siteURL,
    logo: logoURL,
    aggregateRating: {
      ratingValue: '5',
      ratingCount: '7',
    },
  };

  const logoProps: LogoJsonLdProps = {
    url: siteURL,
    logo: logoURL,
  };

  const socialProfileProps: SocialProfileJsonLdProps = {
    type: 'Organization',
    name: 'Ottoset Energy',
    url: siteURL,
    sameAs: socials.map(({ href }) => href),
  };

  return (
    <>
      <WebPageJsonLd {...webPageProps} />
      <OrganizationJsonLd {...organizationProps} />
      <BrandJsonLd {...brandProps} />
      <LogoJsonLd {...logoProps} />
      <SocialProfileJsonLd {...socialProfileProps} />
    </>
  );
};
