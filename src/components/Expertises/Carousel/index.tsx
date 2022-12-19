import React, { Children, useCallback, useEffect, useState } from 'react';

import { EmblaCarouselType } from 'embla-carousel-react';

import { Text } from '@components/Texts';

import { expertises } from '@data/static/expertises';

import { Expertise } from '../Expertise';

import { NextButton, PrevButton } from './Buttons';

type Props = {
  slides: typeof expertises;
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
    <div className="relative overflow-hidden">
      <div ref={emblaRef}>
        <div className="flex">
          {Children.toArray(
            slides.map(({ image, link, title }) => (
              <div className="h-72 sm:h-96 w-fit lg:min-w-[37.25rem]">
                <div className="flex justify-center items-center w-screen lg:w-full h-full">
                  <Expertise image={image} link={link} title={title} />
                </div>
              </div>
            )),
          )}
        </div>
      </div>

      <div className="block lg:hidden absolute bottom-5 left-1/2 -translate-x-1/2">
        <div className="flex gap-2 sm:gap-6 items-center relative">
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <Text variant="p2" as="span" className="text-neutral">
            {currentSlide + 1} / {slides.length}
          </Text>
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
      </div>
    </div>
  );
};

export const Carousel = React.forwardRef(FowardFunction);
