import Head from 'next/head';
import { Children, useEffect, useState } from 'react';

import { useWindowSize } from '@hooks/useWindowSize';
import { navLinks } from '@data/navLinks';

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
  const { width } = useWindowSize();

  const [styles, setStyles] = useState<JSX.Element>();

  useEffect(() => {
    if (!width) return;

    setStyles(getClassNames(width));
  }, [width]);

  const NavList = navLinks
    .filter(({ onlyHeader }) => !onlyHeader)
    .map(
      ({ label, subItems }, index) =>
        subItems && (
          <Disclosure label={label} id={index.toString()}>
            {Children.toArray(
              subItems.map((item) => (
                <SubItem href={item.href} label={item.label} />
              ))
            )}
          </Disclosure>
        )
    );

  return (
    <>
      <Head>{styles}</Head>
      <ul className="flex justify-center items-center lg:hidden flex-col h-full w-full mb-6">
        {Children.toArray(NavList)}
      </ul>
    </>
  );
};
