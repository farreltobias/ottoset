import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import config from 'next-seo.config';

type Props = {
  ogImageURL: string;
  siteURL: string;
};

export const SEO: React.FC<Props> = ({ ogImageURL, siteURL }) => {
  const defaultOptions = {
    title: 'Sobre a Ottoset Energy',
    description:
      'A Ottoset Energy é uma empresa especializada em soluções em energia.',
    url: `${siteURL}/sobre`,
  };

  const { description, url, title } = defaultOptions;

  const prorps: NextSeoProps = {
    title,
    description,
    canonical: url,
    openGraph: {
      ...config.openGraph,
      title,
      description,
      url,
      images: [
        {
          url: ogImageURL,
          width: 528,
          height: 360,
          alt: title,
        },
      ],
    },
  };

  return <NextSeo {...prorps} />;
};
