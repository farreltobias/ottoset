/* eslint-disable camelcase */
import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';

import { useInstagram } from '@hooks/useInstagram';
import { useWindowSize } from '@hooks/useWindowSize';

import { Link } from '@components/Link';
import { Title } from '@components/Texts';

import { instagram } from '@data/static/ottoset';

type Props = {
  limit?: number;
};

export const Instagram: React.FC<Props> = ({ limit = 12 }) => {
  const { data: initialImages, error, mutate } = useInstagram(limit);

  const [photos, setPhotos] = useState(initialImages?.data || []);

  const { width } = useWindowSize();

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

  useEffect(() => {
    if (!width) return;

    const setNewPhotos = async () => {
      let images = initialImages?.data;

      if (!images) {
        images = await mutate().then((data) => data?.data);
      }

      const limit = Math.ceil(width / 240) + 1;

      if (photos.length === limit || photos.length > limit) return;

      const repetitions = Math.ceil(limit / limit);
      const newPhotos = Array.from(
        { length: repetitions },
        () => initialImages?.data || [],
      ).flat();

      setPhotos(newPhotos.slice(0, limit));
    };

    setNewPhotos();
  }, [width, initialImages, photos, mutate]);

  useEffect(() => {
    reloadEmbla();
  }, [reloadEmbla, photos]);

  if (error || !photos.length) return null;

  return (
    <section>
      <Link
        href={`https://www.instagram.com/${instagram}`}
        target="_blank"
        rel="noreferrer"
        className="flex-col m-0"
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="grid grid-flow-col">
            {photos.map(({ media_url, id }, index) => (
              <div className="relative w-60 h-60" key={id}>
                <Image
                  src={media_url}
                  alt={`Instagram photo ${index + 1}`}
                  className="w-full h-full"
                  sizes="(min-width: 0) 100vw"
                  fill
                />
              </div>
            ))}
          </div>
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