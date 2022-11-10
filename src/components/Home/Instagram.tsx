import { Children, useCallback, useEffect, useMemo, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';

import { useWindowSize } from '@hooks/useWindowSize';

import { Link } from '@components/Link';
import { Title } from '@components/Texts';

import { images } from '@data/static/instagram';
import { instagram } from '@data/static/ottoset';

type Photos = {
  path: StaticImageData;
  name: string;
}[];

export const Instagram: React.FC = () => {
  const options: EmblaOptionsType = useMemo(
    () => ({
      dragFree: true,
      loop: true,
      skipSnaps: false,
      align: 'start',
    }),
    [],
  );

  const autoplay = Autoplay({
    stopOnInteraction: false,
    delay: 2500,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay]);

  const reloadEmbla = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.reInit(options);
  }, [emblaApi, options]);

  const { width } = useWindowSize();

  const [photos, setPhotos] = useState<Photos>(images);

  useEffect(() => {
    if (!width) return;

    const repetitions = Math.ceil(width / 240 / (images.length - 1));
    setPhotos(Array.from({ length: repetitions }, () => images).flat());
  }, [width]);

  useEffect(() => {
    reloadEmbla();
  }, [reloadEmbla, photos]);

  return (
    <section>
      <Link
        href={`https://www.instagram.com/${instagram}`}
        target="_blank"
        rel="noreferrer"
        className="flex-col m-0"
      >
        <div className="flex overflow-hidden" ref={emblaRef}>
          {Children.toArray(
            photos.map(({ path, name }) => (
              <div className="relative w-60">
                <Image
                  src={path}
                  alt={name}
                  placeholder="blur"
                  className="w-full h-auto"
                  sizes="100vw"
                />
              </div>
            )),
          )}
        </div>

        <div className="w-full p-9 text-center bg-primary-50">
          <Title
            as="span"
            variant="h6"
            largeVariant="h4"
            style={{
              background:
                '-webkit-linear-gradient(0, #FFB76D 0%, #FF6C0A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Siga @ottosetenergy no instagram
          </Title>
        </div>
      </Link>
    </section>
  );
};
