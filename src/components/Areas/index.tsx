import { Children } from 'react';

import { services } from '@data/static/services';

import { Area } from './Area';

export const Areas: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {Children.toArray(
        services.map(({ icon, image, title, subTitle, link }) => (
          <div className="h-72 sm:h-96 w-full overflow-hidden">
            <div className="flex justify-center items-center w-full h-full">
              <Area
                title={title}
                icon={icon}
                image={image}
                link={link}
                subTitle={subTitle}
              />
            </div>
          </div>
        )),
      )}
    </div>
  );
};
