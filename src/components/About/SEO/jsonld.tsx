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
    datePublished: '2022-25-12T20:00:00+03:00',
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
