import React, { Children } from 'react';

import { Card } from '@components/Card';

import type { Project } from '@data/static/projects';

type Props = {
  projects: Project[];
};

const FowardFunction: React.ForwardRefRenderFunction<any, Props> = (
  { projects },
  emblaRef,
) => {
  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {Children.toArray(
          projects.map(({ title, description, duration, link, img }) => (
            <div className="embla__slide mr-2 lg:mr-8">
              <div className="embla__slide__inner relative">
                <Card
                  title={title}
                  description={description}
                  duration={duration}
                  img={img}
                  link={link}
                />
              </div>
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export const Carousel = React.forwardRef(FowardFunction);
