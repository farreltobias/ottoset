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
              .map(({ href, label, target }) => (
                <SubItem href={href} label={label} target={target} />
              )),
          )}
        </Dropdown>
      ) : (
        <Item href={href || ''}>{label}</Item>
      ),
    );

  return (
    <>
      <ul className="hidden lg:flex">{Children.toArray(NavList)}</ul>
      <Link href="/contato" legacyBehavior>
        <a aria-label="Fale conosco">
          <Button className="hidden lg:flex text-xs xl:text-base">
            Fale conosco
          </Button>
        </a>
      </Link>
    </>
  );
};
