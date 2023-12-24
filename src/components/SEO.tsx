import { StaticImageData } from 'next/image';
import { NextSeo, NextSeoProps } from 'next-seo';
import config from 'next-seo.config';

type Options = {
  title?: string;
  description: string;
  path: string;
  siteURL: string;
};

type Props = {
  ogImage: StaticImageData;
  options: Options;
};

export const SEO: React.FC<Props> = ({
  ogImage: { src: ogImageURL, width, height },
  options: { description, title, path, siteURL },
}) => {
  const props: NextSeoProps = {
    title,
    description,
    canonical: `${siteURL}${path}`,
    openGraph: {
      ...config.openGraph,
      title,
      description,
      url: `${siteURL}${path}`,
      images: [
        {
          url: ogImageURL,
          width,
          height,
          alt: title,
        },
      ],
    },
  };

  return <NextSeo {...props} />;
};
