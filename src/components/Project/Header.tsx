import Link from 'next/link';

import Back from '@public/navigation/double-arrow-left.svg';

import { Button } from '@components/Button';

export const Header: React.FC = () => {
  return (
    <header className="w-fit group">
      <Link href="/projetos">
        <button className="flex items-center gap-3 lg:gap-4">
          <Button as="span" className="p-3" group>
            <Back className="fill-neutral" />
          </Button>
          <Button as="span" variant="link" group>
            Voltar
          </Button>
        </button>
      </Link>
    </header>
  );
};
