import { Children } from 'react';

import { navLinks } from '@data/navLinks';

import { SubItem } from './SubItem';

export const Desktop: React.FC = () => {
  const NavList = navLinks
    .filter(({ onlyHeader }) => !onlyHeader)
    .map(({ label, subItems }) => (
      <div className="flex flex-col flex-1 p-4">
        <span className="font-bold mb-2 text-sm xl:text-base font-title whitespace-nowrap">
          {label}
        </span>
        {Children.toArray(
          subItems?.map(({ href, label, target }) => (
            <SubItem label={label} href={href} target={target} />
          )),
        )}
      </div>
    ));

  return (
    <div className="hidden lg:flex justify-between flex-1">
      {Children.toArray(NavList)}
    </div>
  );
};
