import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import { Carousel } from './Carousel';
import { Role } from './Role';
import { Video } from './Video';
import { CarouselDocument } from '.slicemachine/prismicio';

type Props = {
  carousel: CarouselDocument;
};

export const Slider: React.FC<Props> = ({ carousel }) => {
  const { slices } = carousel.data;

  const autoplay = Autoplay({
    delay: 5000,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({}, [autoplay]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[80vh]">
        <Carousel ref={emblaRef} emblaApi={emblaApi} slides={slices} />
        <Role />
      </div>

      <Video />
    </div>
  );
};
