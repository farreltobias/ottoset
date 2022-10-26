import { Children } from 'react';

import { Service } from '@components/Service';

import { services } from '@data/static/services';

export const Services: React.FC = () => {
  return (
    <div className="flex flex-wrap">
      {Children.toArray(
        services.map(({ icon, image, title, link }) => (
          <Service title={title} icon={icon} image={image} link={link} />
        )),
      )}
    </div>
  );
};
