import React, { Children } from 'react';

import type { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

export type ArtigoProps = SliceComponentProps<Content.ArtigoSlice>;

const Artigo: React.FC<ArtigoProps> = ({ slice }) => {
  return (
    <section className="py-6 lg:py-8">
      <PrismicRichText field={slice.primary.title} />
      {Children.toArray(
        slice.items.map((item) => <PrismicRichText field={item.paragraph} />),
      )}
      <PrismicNextImage
        field={slice.primary.image}
        className="mt-6 lg:mt-3 w-full h-auto"
        sizes="100vw"
      />
    </section>
  );
};

export default Artigo;
