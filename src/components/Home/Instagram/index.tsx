/* eslint-disable camelcase */
import { useCallback, useEffect, useMemo, useState } from 'react';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';

import { useInstagram } from '@hooks/useInstagram';

import { BlurImage } from '@components/BlurImage';
import { Link } from '@components/Link';
import { Title } from '@components/Texts';

import { instagram } from '@data/static/ottoset';

type Props = {
  limit?: number;
};

export const Instagram: React.FC<Props> = ({ limit = 12 }) => {
  const {
    data: initialImages,
    error,
    mutate,
    isValidating,
  } = useInstagram(limit);

  const [photos, setPhotos] = useState(initialImages?.data || []);

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
    const setNewPhotos = async () => {
      let images = initialImages?.data;

      if (!images) {
        images = await mutate().then((data) => data?.data);
      }

      setPhotos(images || []);
    };

    setNewPhotos();
  }, [initialImages, mutate, isValidating]);

  useEffect(() => {
    reloadEmbla();
  }, [reloadEmbla, photos]);

  if (error || !photos.length) return null;

  return (
    <article>
      <Link
        href={`https://www.instagram.com/${instagram}`}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col m-0"
      >
        <div className="w-full p-9 text-center bg-primary-50 order-last">
          <Title
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

        <div className="overflow-hidden" ref={emblaRef}>
          <ul className="grid grid-flow-col">
            {photos.map(({ media_url, id }, index) => (
              <li className="relative w-60 h-60" key={id}>
                <BlurImage
                  src={media_url}
                  alt={`Instagram photo ${index + 1}`}
                  className="w-full h-full"
                  sizes="(min-width: 0) 100vw"
                  fill
                />
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
};
