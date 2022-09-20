import Lets from '@public/logo/lets.svg';

import { Link } from '@components/Link';

export const Policy: React.FC = () => {
  return (
    <div className="border-t border-t-secondary-300">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-6 lg:py-8">
        <span className="hidden lg:block font-medium text-sm">
          Política de privacidade
        </span>
        <Link
          className="flex items-center mb-6 lg:mb-2"
          href="https://letscomunica.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="whitespace-nowrap text-neutral-900 pr-2 font-normal text-xs">
            Desenvolvido e hospedado por
          </span>
          <Lets />
        </Link>
        <span className="block lg:hidden text-xs">® Ottoset - Desde 2017</span>
      </div>
    </div>
  );
};
