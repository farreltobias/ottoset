import { Children, useContext, useEffect } from 'react';

import { screens } from 'tailwindcss/defaultTheme';

import { useWindowSize } from '@hooks/useWindowSize';

import { SidebarContext } from '@contexts/SidebarContext';

import { navLinks } from '@data/navLinks';

import { Disclosure } from './Disclosure';
import { Hamburguer } from './Hamburguer';
import { Item } from './Item';
import { SubItem } from './SubItem';

import { Transition } from '@headlessui/react';

export const Mobile: React.FC<React.PropsWithChildren> = () => {
  const desktopWidth = Number(screens.lg.match(/\d+/g)?.[0]);

  const { show, setShow } = useContext(SidebarContext);
  const { width } = useWindowSize();

  useEffect(() => {
    if (!width) return;

    if (width > desktopWidth) {
      document.body.classList.remove('overflow-hidden');
      setShow(false);
    }
  }, [width, setShow, desktopWidth]);

  const NavList = navLinks
    .filter(({ onlyFooter }) => !onlyFooter)
    .map(({ label, href, subItems }) =>
      subItems ? (
        <Disclosure label={label}>
          {Children.toArray(
            subItems.map(({ href, label, target }) => (
              <SubItem href={href} label={label} target={target} />
            )),
          )}
        </Disclosure>
      ) : (
        <Item href={href || ''} className="child:w-full">
          {label}
        </Item>
      ),
    );

  return (
    <>
      <Hamburguer />

      <Transition
        as="div"
        show={show}
        enter="transition-all duration-300"
        enterFrom="-right-full"
        enterTo="right-0"
        leave="transition-all duration-150"
        leaveFrom="right-0"
        leaveTo="-right-full"
        className="block lg:hidden bg-neutral-900 h-screen w-screen fixed top-0 z-10 pt-28 overflow-auto"
      >
        <ul className="container mx-auto h-full w-full">
          {Children.toArray(NavList)}
        </ul>
      </Transition>
    </>
  );
};
