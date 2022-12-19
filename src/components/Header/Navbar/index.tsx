import Link from 'next/link';

import Logo from '@public/company/logo.svg';

import { Desktop } from './Desktop';
import { Mobile } from './Mobile';

export const Navbar: React.FC<React.PropsWithChildren> = () => {
  return (
    <nav className="flex justify-between items-center container mx-auto py-2 h-20 lg:h-fit">
      <Link href="/" legacyBehavior>
        <a aria-label="Página inicial da ottoset">
          <Logo className="w-32 lg:w-40" />
        </a>
      </Link>

      <Desktop />
      <Mobile />
    </nav>
  );
};
