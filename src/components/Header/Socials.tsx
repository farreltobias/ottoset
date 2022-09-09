import { Children } from 'react';
import { socials } from '../../utils/socials';
import { Caps } from '../Text/titles';

export const Socials: React.FC = () => {
  return (
    <div className="hidden lg:flex">
      <Caps>Redes sociais</Caps>
      <ul className="flex items-center justify-start pl-4">
        {Children.toArray(
          socials.map(({ Icon, href }, index) => (
            <a href={href} target="_blank" rel="noreferrer" className="mr-4">
              <Icon width={15} />
            </a>
          ))
        )}
      </ul>
    </div>
  );
};
