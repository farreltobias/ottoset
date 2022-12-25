import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { screens } from 'tailwindcss/defaultTheme';

import { useWindowSize } from '@hooks/useWindowSize';

import { Overlaid } from '@components/Texts/Overlaid';

import { Expertise } from '@data/static/expertises';

import { Carousel } from './Carousel';

type Props = {
  className?: string;
  expertises: Expertise[];
};

export const Expertises: React.FC<Props> = ({ className = '', expertises }) => {
  const { width } = useWindowSize();

  const desktopWidth = Number(screens.lg.match(/\d+/g)?.[0]);

  const options: EmblaOptionsType = {
    dragFree: (width || 0) >= desktopWidth,
    align: 'start',
    containScroll: 'keepSnaps',
  };

  const wheelGestures = WheelGesturesPlugin();
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [wheelGestures]);

  return (
    <article className={className}>
      <Overlaid className="text-center mb-12">
        <Overlaid.Title>Conheça nossas</Overlaid.Title>
        <Overlaid.SubTitle>Áreas de Atuação</Overlaid.SubTitle>
      </Overlaid>

      <div className="flex">
        <Carousel ref={emblaRef} emblaApi={emblaApi} slides={expertises} />
      </div>
    </article>
  );
};
