import { Children, useContext, useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { screens } from 'tailwindcss/defaultTheme';

import { useWindowSize } from '@hooks/useWindowSize';

import { SidebarContext } from '@contexts/SidebarContext';

import { navLinks } from '@data/navLinks';

import { Disclosure } from './Disclosure';
import { Hamburguer } from './Hamburguer';
import { Item } from './Item';
import { SubItem } from './SubItem';

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

      <AnimatePresence>
        {show && (
          <motion.div
            className="block lg:hidden bg-neutral-900 fixed inset-0 z-10 pt-28 overflow-auto"
            initial={{ x: '100%' }}
            animate={{ x: show ? 0 : '100%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.2 }}
          >
            <ul className="container mx-auto h-full w-full mb-10">
              {Children.toArray(NavList)}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
