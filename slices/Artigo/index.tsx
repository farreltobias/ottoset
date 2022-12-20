import React, { Children } from 'react';

import type { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

import { Text, Title } from '@components/Texts';

export type ArtigoProps = SliceComponentProps<Content.ArtigoSlice>;

const Artigo: React.FC<ArtigoProps> = ({ slice }) => {
  return (
    <section className="py-6 lg:py-8">
      <Title
        as="h2"
        variant="h4"
        largeVariant="h3"
        className="text-center mb-6 lg:mb-8"
      >
        <PrismicRichText field={slice.primary.title} />
      </Title>

      {Children.toArray(
        slice.items.map((item) => (
          <Text variant="p2" className="text-center mb-6 lg:mb-10">
            <PrismicRichText field={item.paragraph} />
          </Text>
        )),
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
