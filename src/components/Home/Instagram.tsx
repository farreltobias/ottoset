import Image, { StaticImageData } from 'next/image';
import { Children, useCallback, useEffect, useMemo, useState } from 'react';

import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { useWindowSize } from '@hooks/useWindowSize';

import { Title } from '@components/Texts';
import { Link } from '@components/Link';

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
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {Children.toArray(
              photos.map(({ path, name }) => (
                <div className="embla__slide">
                  <div className="embla__slide__inner relative w-60">
                    <Image
                      src={path}
                      layout="responsive"
                      alt={name}
                      placeholder="blur"
                      className="embla__slide__img"
                    />
                  </div>
                </div>
              )),
            )}
          </div>
        </div>

        <div className="w-full p-9 text-center bg-primary-50">
          <Title
            as="span"
            variant="h6"
            className="lg:text-2xl"
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
