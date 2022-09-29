import { Children, useContext, useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { screens } from 'tailwindcss/defaultTheme';

import { SidebarContext } from '@contexts/SidebarContext';

import { useWindowSize } from '@hooks/useWindowSize';
import { navLinks } from '@utils/navLinks';

import { Item } from './Item';
import { Hamburguer } from './Hamburguer';
import { Disclosure } from './Disclosure';
import { SubItem } from './SubItem';
import Head from 'next/head';

const getClassNames = (width: number) => {
  const stylesString = navLinks.reduce((acc, { subItems }, index) => {
    if (!subItems) return acc;

    const className = `disclosure-item-height-${index}`;
    const padding = (32 + 20 + 16) * 2;
    const size = width - padding;

    const height = subItems.reduce((acc, { label }) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      if (!context) return acc;

      context.font = '600 1.125rem Inter, sans-serif';
      const { width: textWidth } = context.measureText(label);

      return acc + 5 + (Math.ceil(textWidth / size) - 1) * 1.75;
    }, 0);

    const style = `.${className} { height: ${height}rem; }\n`;
    return acc + style;
  }, '');

  return <style>{stylesString}</style>;
};

export const Mobile: React.FC<React.PropsWithChildren> = () => {
  const desktopWidth = Number(screens.lg.match(/\d+/g)?.[0]);

  const { show, setShow } = useContext(SidebarContext);
  const { width } = useWindowSize();

  const [styles, setStyles] = useState<JSX.Element>();

  useEffect(() => {
    if (!width) return;

    setStyles(getClassNames(width));

    if (width > desktopWidth) {
      document.body.classList.remove('overflow-hidden');
      setShow(false);
    }
  }, [width, setShow, desktopWidth]);

  const NavList = navLinks.map(({ label, href, subItems }, index) =>
    subItems ? (
      <Disclosure label={label} id={index.toString()}>
        {Children.toArray(
          subItems.map((item) => (
            <SubItem href={item.href} label={item.label} />
          ))
        )}
      </Disclosure>
    ) : (
      <Item href={href || ''} className="child:w-full">
        {label}
      </Item>
    )
  );

  return (
    <>
      <Head>{styles}</Head>
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
