import NextLink from 'next/link';
import Logo from '@public/logo/logo.svg';

import { screens } from 'tailwindcss/defaultTheme';

import { Desktop } from './Desktop';
import { Mobile } from './Mobile';
import { useGetScreenWidth } from '@hooks/useGetScreenWidth';

export const Navbar: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { width } = useGetScreenWidth();

  const desktopWidth = Number(screens.xl.match(/\d+/g)?.[0]);

  const size =
    width < desktopWidth
      ? {
          height: 130 * 0.36,
          width: 130,
          viewBox: '15 0 130 60',
        }
      : {
          height: 162 * 0.36,
          width: 162,
          viewBox: '0 0 162 59',
        };

  return (
    <nav className="flex justify-between items-center container mx-auto py-2 h-20 lg:h-fit">
      <NextLink href="/">
        <a>
          <Logo
            width={size.width}
            height={size.height}
            viewBox={size.viewBox}
          />
        </a>
      </NextLink>

      <Desktop />
      <Mobile />
    </nav>
  );
};
