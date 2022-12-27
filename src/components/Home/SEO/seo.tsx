import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import config from 'next-seo.config';

type Props = {
  ogImageURL: string;
};

export const SEO: React.FC<Props> = ({ ogImageURL }) => {
  const defaultOptions = {
    description:
      'A Ottoset Energy é uma empresa especializada em soluções em energia.',
    url: 'https://www.ottoset.com.br/sobre',
  };

  const { description, url } = defaultOptions;

  const prorps: NextSeoProps = {
    title: 'Sobre',
    description,
    canonical: url,
    openGraph: {
      ...config.openGraph,
      title: 'Sobre a Ottoset Energy',
      description,
      url,
      images: [
        {
          url: ogImageURL,
          width: 528,
          height: 360,
          alt: 'Sobre a Ottoset Energy',
        },
      ],
    },
  };

  return <NextSeo {...prorps} />;
};
