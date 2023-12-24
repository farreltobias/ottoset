import type { ComponentProps } from 'react';
import { useState } from 'react';

import { PrismicNextImage } from '@prismicio/next';
import { ImageFieldImage } from '@prismicio/types';

import { classNames } from '@utils/classNames';

type Props = ComponentProps<typeof PrismicNextImage> & {
  className?: string;
  field: ImageFieldImage;
};

export const PrismicBlurImage: React.FC<Props> = ({
  className = '',
  field,
  ...props
}) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <PrismicNextImage
      {...props}
      field={field}
      className={classNames(
        className,
        'duration-700 ease-in-out',
        isLoading
          ? 'grayscale blur-2xl scale-110'
          : 'grayscale-0 blur-0 scale-100',
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};
