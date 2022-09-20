import Head from 'next/head';
import { Children, useEffect, useState } from 'react';

import { Item } from '@components/Navbar/Mobile/Item';

import { useGetScreenWidth } from '@hooks/useGetScreenWidth';
import { navLinks } from '@utils/navLinks';

import { Disclosure } from './Disclosure';
import { SubItem } from './SubItem';

const getClassNames = (width: number) => {
  const stylesString = navLinks
    .filter(({ onlyHeader }) => !onlyHeader)
    .reduce((acc, { subItems }, index) => {
      if (!subItems) return acc;

      const className = `footer-disclosure-item-height-${index}`;
      const PADDING = 32 * 2;
      const size = width - PADDING;

      const height = subItems.reduce((acc, { label }) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        if (!context) return acc;

        context.font = '500 0.875rem Inter, sans-serif';
        const { width: textWidth } = context.measureText(label);

        return acc + 1.75 + (Math.ceil(textWidth / size) - 1) * 1.25;
      }, 0);

      const style = `.${className} { height: ${height}rem; }\n`;
      return acc + style;
    }, '');

  return <style>{stylesString}</style>;
};

export const Mobile: React.FC<React.PropsWithChildren> = () => {
  const { width } = useGetScreenWidth();

  const [styles, setStyles] = useState<JSX.Element>();

  useEffect(() => {
    setStyles(getClassNames(width));
  }, [width]);

  const NavList = navLinks
    .filter(({ onlyHeader }) => !onlyHeader)
    .map(({ label, href, subItems }, index) =>
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
      <ul className="list-none flex justify-center items-center lg:hidden flex-col h-full w-full mb-6">
        {Children.toArray(NavList)}
      </ul>
    </>
  );
};
