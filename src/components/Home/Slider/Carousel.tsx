import React, { Children, useCallback, useEffect, useState } from 'react';

import { EmblaCarouselType } from 'embla-carousel-react';

import { NextButton, PrevButton } from './CarouselButtons';

type Props = {
  slides: React.ReactNode[];
  emblaApi?: EmblaCarouselType;
};

const FowardFunction: React.ForwardRefRenderFunction<any, Props> = (
  { slides, emblaApi },
  emblaRef,
) => {
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());

    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="embla h-full relative">
      <div className="embla__viewport overflow-hidden h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {Children.toArray(
            slides.map((slide) => (
              <div className="embla__slide w-full h-full shrink-0 grow-0 basis-full">
                <div className="embla__slide__inner w-full h-full">{slide}</div>
              </div>
            )),
          )}
        </div>
      </div>
      <span className="w-full h-full absolute top-0">
        <span className="block w-full h-full container mx-auto relative">
          <NextButton
            current={currentSlide}
            total={slides.length}
            onClick={scrollNext}
            enabled={nextBtnEnabled}
          />
          <PrevButton
            current={currentSlide}
            total={slides.length}
            onClick={scrollPrev}
            enabled={prevBtnEnabled}
          />
        </span>
      </span>
    </div>
  );
};

export const Carousel = React.forwardRef(FowardFunction);
