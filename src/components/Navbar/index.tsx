import NextLink from 'next/link';
import Logo from '@public/logo/logo.svg';

import { Desktop } from './Desktop';
import { Mobile } from './Mobile';

export const Navbar: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <nav className="flex justify-between items-center container mx-auto py-2">
      <NextLink href="/">
        <a>
          <Logo width={162} height={162 * 0.36} />
        </a>
      </NextLink>

      <Desktop />
      <Mobile />
    </nav>
  );
};
