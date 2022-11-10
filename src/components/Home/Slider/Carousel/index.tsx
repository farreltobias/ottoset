import React, { Children, useCallback, useEffect, useState } from 'react';

import { EmblaCarouselType } from 'embla-carousel-react';

import { Service } from '@data/static/services';

import { Slide } from '../Slide';

import { NextButton, PrevButton } from './Buttons';

type Props = {
  slides: Service[];
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
    <div className="h-full relative overflow-hidden">
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {Children.toArray(
            slides.map(({ title, description, image, link, subTitle }) => (
              <div className="w-full h-full shrink-0 grow-0 basis-full">
                <Slide
                  title={title}
                  subTitle={subTitle}
                  link={link}
                  description={description}
                  image={image}
                />
              </div>
            )),
          )}
        </div>
      </div>
      <div className="absolute top-10 container mx-auto lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2">
        <div className="relative w-full">
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
        </div>
      </div>
    </div>
  );
};

export const Carousel = React.forwardRef(FowardFunction);
