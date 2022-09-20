import { Children } from 'react';

import { socials } from '@utils/socials';
import { Title } from '@components/Text/titles';

export const Socials: React.FC = () => {
  return (
    <div className="hidden lg:flex">
      <Title as="span" variant="caps" className="text-sm xl:text-base">
        Redes sociais
      </Title>
      <ul className="list-none flex items-center justify-start pl-4">
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
