import { StaticImageData } from 'next/image';

import { JsonLd } from './jsonld';
import { SEO as DefaultSeo } from './seo';

type Props = {
  image: StaticImageData;
  siteURL: string;
  pageImages: StaticImageData[];
};

export const SEO: React.FC<Props> = ({ image, siteURL, pageImages }) => {
  const images = pageImages.map(({ src }) => `${siteURL}${src}`);
  const ogImage = `${siteURL}${image.src}`;

  return (
    <>
      <DefaultSeo ogImageURL={ogImage} />
      <JsonLd images={images} ogImageURL={ogImage} />
    </>
  );
};
