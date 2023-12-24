import { ImageJsonLd, ImageJsonLdProps } from 'next-seo';

type Props = {
  pageImages: string[];
};

export const JsonLd: React.FC<Props> = ({ pageImages }) => {
  const imageProps: ImageJsonLdProps = {
    images: pageImages.map((contentUrl) => ({
      contentUrl,
      creator: {
        '@type': 'Organization' as 'Organisation',
        name: 'Ottoset Energy',
      },
    })),
  };

  return (
    <>
      <ImageJsonLd {...imageProps} />
    </>
  );
};
