import NextLink from 'next/link';

import Logo from '@public/company/logo.svg';

import { Desktop } from './Desktop';
import { Mobile } from './Mobile';

export const Navbar: React.FC<React.PropsWithChildren> = () => {
  return (
    <nav className="flex justify-between items-center container mx-auto py-2 h-20 lg:h-fit">
      <NextLink href="/">
        <Logo className="w-32 lg:w-40" />
      </NextLink>

      <Desktop />
      <Mobile />
    </nav>
  );
};
