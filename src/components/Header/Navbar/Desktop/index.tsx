import { Children } from 'react';
import Link from 'next/link';

import { Button } from '@components/Button';

import { navLinks } from '@data/navLinks';

import { Dropdown } from './Dropdown';
import { Item } from './Item';
import { SubItem } from './SubItem';

export const Desktop: React.FC<React.PropsWithChildren> = () => {
  const NavList = navLinks
    .filter(({ onlyFooter }) => !onlyFooter)
    .map(({ label, href, subItems }) =>
      subItems ? (
        <Dropdown label={label}>
          {Children.toArray(
            subItems
              .filter(({ onlyFooter }) => !onlyFooter)
              .map((item) => <SubItem href={item.href} label={item.label} />),
          )}
        </Dropdown>
      ) : (
        <Item href={href || ''}>{label}</Item>
      ),
    );

  return (
    <>
      <ul className="hidden lg:flex">{Children.toArray(NavList)}</ul>
      <Button className="hidden lg:flex text-xs xl:text-base">
        <Link href="contato">Fale conosco</Link>
      </Button>
    </>
  );
};
