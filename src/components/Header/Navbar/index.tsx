import NextLink from 'next/link';
import { screens } from 'tailwindcss/defaultTheme';

import { useWindowSize } from '@hooks/useWindowSize';

import Logo from '@public/company/logo.svg';

import { Desktop } from './Desktop';
import { Mobile } from './Mobile';
import { useEffect, useState } from 'react';

export const Navbar: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { width } = useWindowSize();

  const desktopWidth = Number(screens.xl.match(/\d+/g)?.[0]);
  const [sizes, setStizes] = useState({
    height: 162 * 0.36,
    width: 162,
    viewBox: '0 0 162 59',
  });

  useEffect(() => {
    if (!width) return;

    if (width < desktopWidth) {
      setStizes({
        height: 130 * 0.36,
        width: 130,
        viewBox: '15 0 130 60',
      });
    } else {
      setStizes({
        height: 162 * 0.36,
        width: 162,
        viewBox: '0 0 162 59',
      });
    }
  }, [width, desktopWidth]);

  return (
    <nav className="flex justify-between items-center container mx-auto py-2 h-20 lg:h-fit">
      <NextLink href="/">
        <a>
          <Logo
            width={sizes.width}
            height={sizes.height}
            viewBox={sizes.viewBox}
          />
        </a>
      </NextLink>

      <Desktop />
      <Mobile />
    </nav>
  );
};
