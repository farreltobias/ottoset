import { Service } from '@data/static/services';

import { Area } from './Area';

type Props = {
  services: Service[];
};

export const Areas: React.FC<Props> = ({ services }) => {
  return (
    <ul role="grid" className="flex flex-col lg:flex-row">
      {services.map((service) => (
        <li key={service.title} className="h-72 sm:h-96 full overflow-hidden">
          <Area service={service} />
        </li>
      ))}
    </ul>
  );
};
