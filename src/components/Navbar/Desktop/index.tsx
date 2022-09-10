import { Children } from 'react';

import { Button } from '@components/Button';
import { Caps } from '@components/Text/titles';

import { navLinks } from '@utils/navLinks';

import { Item } from './Item';
import { Dropdown } from './Dropdown';
import { SubItem } from './SubItem';

export const Desktop: React.FC<React.PropsWithChildren> = () => {
  const NavList = navLinks.map(({ label, href, dropdown }) =>
    dropdown ? (
      <Dropdown label={label}>
        {Children.toArray(
          dropdown.map((item) => (
            <SubItem href={item.href} label={item.label} />
          ))
        )}
      </Dropdown>
    ) : (
      <Item href={href}>{label}</Item>
    )
  );

  return (
    <>
      <ul className="hidden lg:flex">{Children.toArray(NavList)}</ul>
      <Button className="hidden lg:flex">
        <Caps>Fale conosco</Caps>
      </Button>
    </>
  );
};
