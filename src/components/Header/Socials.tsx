import { Children } from 'react';

import { Caps } from '@components/Texts';

import { socials } from '@utils/socials';

export const Socials: React.FC = () => {
  return (
    <div className="hidden lg:flex">
      <Caps className="text-sm xl:text-base">Redes sociais</Caps>
      <ul className="flex items-center justify-start pl-4">
        {Children.toArray(
          socials.map(({ Icon, href }) => (
            <li className="mr-4">
              <a href={href} target="_blank" rel="noreferrer">
                <Icon width={15} />
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
