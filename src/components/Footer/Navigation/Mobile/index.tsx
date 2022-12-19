import { Children } from 'react';

import { navLinks } from '@data/navLinks';

import { Disclosure } from './Disclosure';
import { SubItem } from './SubItem';

export const Mobile: React.FC<React.PropsWithChildren> = () => {
  const navList = navLinks.filter(({ onlyHeader }) => !onlyHeader);

  return (
    <ul className="flex justify-center items-center lg:hidden flex-col h-full w-full mb-6">
      {Children.toArray(
        navList.map(
          ({ label, subItems }) =>
            subItems && (
              <Disclosure label={label}>
                {Children.toArray(
                  subItems.map(({ href, label, target }) => (
                    <SubItem href={href} label={label} target={target} />
                  )),
                )}
              </Disclosure>
            ),
        ),
      )}
    </ul>
  );
};
