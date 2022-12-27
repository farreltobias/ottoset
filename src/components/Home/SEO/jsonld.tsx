import {
  ArticleJsonLd,
  ArticleJsonLdProps,
  ImageJsonLd,
  ImageJsonLdProps,
} from 'next-seo';

type Props = {
  images: string[];
  ogImageURL: string;
};

export const JsonLd: React.FC<Props> = ({ images }) => {
  const props: ArticleJsonLdProps = {
    url: 'https://ottoset.com.br/sobre',
    title: 'Sobre a Ottoset',
    description:
      'A Ottoset Energy é uma empresa especializada em soluções em energia.',
    images,
    datePublished: new Date('2022-12-25T20:00:00+03:00').toISOString(),
    isAccessibleForFree: true,
    authorName: 'Ottoset Energy',
  };

  const jsonLdImages: ImageJsonLdProps['images'] = images.map((contentUrl) => ({
    contentUrl,
    creator: {
      '@type': 'Organisation',
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
