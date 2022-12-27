import {
  ArticleJsonLd,
  ArticleJsonLdProps,
  ImageJsonLd,
  ImageJsonLdProps,
} from 'next-seo';

type Props = {
  images: string[];
  siteURL: string;
};

export const JsonLd: React.FC<Props> = ({ images, siteURL }) => {
  const props: ArticleJsonLdProps = {
    url: `${siteURL}/sobre`,
    title: 'Sobre a Ottoset',
    description:
      'A Ottoset Energy é uma empresa especializada em soluções em energia.',
    images,
    datePublished: new Date('2022-12-25T20:00:00+03:00').toISOString(),
    isAccessibleForFree: true,
    authorName: [
      {
        '@type': 'Organization',
        name: 'Ottoset Energy',
        url: siteURL,
      },
    ],
  };

  const jsonLdImages: ImageJsonLdProps['images'] = images.map((contentUrl) => ({
    contentUrl,
    creator: {
      '@type': 'Organization' as 'Organisation',
      name: 'Ottoset Energy',
    },
  }));

  return (
    <>
      <ImageJsonLd images={jsonLdImages} />
      <ArticleJsonLd {...props} />
    </>
  );
};
