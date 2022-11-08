import Link from 'next/link';

import Logo from '@public/company/logo.svg';

import { Desktop } from './Navigation/Desktop';
import { Mobile } from './Navigation/Mobile';
import { Information } from './Information';
import { Policy } from './Policy';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-neutral-50">
      <div className="container mx-auto flex py-8">
        <div className="flex flex-col w-full lg:w-fit lg:mr-8 child:w-fit child:mx-auto child:lg:mx-0">
          <Link href="/" className="mb-4">
            <Logo width={130} height={130 * 0.36} />
          </Link>
          <Mobile />
          <Information />
        </div>
        <Desktop />
      </div>
      <Policy />
    </footer>
  );
};
