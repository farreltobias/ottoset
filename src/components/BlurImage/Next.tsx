import type { ComponentProps } from 'react';
import { useState } from 'react';
import Image from 'next/image';

import { classNames } from '@utils/classNames';

type Props = ComponentProps<typeof Image> & {
  alt: string;
  className?: string;
};

export const NextBlurImage: React.FC<Props> = ({
  alt,
  className = '',
  ...props
}) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      alt={alt}
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
