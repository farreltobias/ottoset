import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { Carousel } from './Carousel';
import { Slide } from './Slide';
import { slides } from '@data/static/slider';

export const Slider: React.FC = () => {
  const autoplay = Autoplay({
    stopOnMouseEnter: true,
    delay: 5000,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({}, [autoplay]);

  return (
    <section className="relative h-[80vh] w-full">
      <Carousel
        ref={emblaRef}
        emblaApi={emblaApi}
        slides={slides.map((slide) => (
          <Slide
            title={slide.title}
            description={slide.description}
            image={slide.image}
          />
        ))}
      />
      <span className="absolute flex flex-col items-center justify-center bottom-12 left-1/2 -translate-x-1/2">
        <span className="flex justify-center border-2 border-neutral w-6 h-9 rounded-full py-2">
          <span className="block h-2 border border-neutral animate-scroll mt-auto" />
        </span>
        <span className="text-neutral font-alt mt-2">Role para baixo</span>
      </span>
    </section>
  );
};
