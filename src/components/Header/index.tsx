import { Navbar } from '@components/Navbar';

import { Contact } from './Contact';
import { Socials } from './Socials';

export const Header: React.FC = () => {
  return (
    <header className="w-full fixed shadow-sm z-10">
      <div className="bg-primary-500 py-3">
        <div className="container mx-auto flex flex-row justify-center lg:justify-between items-center text-neutral">
          <Socials />
          <Contact />
        </div>
      </div>
      <div className="bg-neutral">
        <Navbar />
      </div>
    </header>
  );
};
