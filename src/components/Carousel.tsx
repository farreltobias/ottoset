import { ReactNode, useCallback } from 'react';
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react';

type Props = {
  options?: EmblaOptionsType;
  slides: ReactNode[];
  reloadEmbla: (embla: EmblaCarouselType) => void;
};

export const Carousel: React.FC<Props> = ({ options, slides, reloadEmbla }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useCallback(() => {
    if (emblaApi) reloadEmbla(emblaApi);
  }, [emblaApi, reloadEmbla]);

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};
