import { useContext } from 'react';
import Link from 'next/link';

import { SidebarContext } from '@contexts/SidebarContext';

type Props = {
  className?: string;
  href: string;
  label: string;
};

export const SubItem: React.FC<Props> = ({ href, label, className = '' }) => {
  const { setShow } = useContext(SidebarContext);
  return (
    <li className={`flex items-center ${className}`}>
      <Link href={href}>
        <a
          onClick={() => {
            document.body.classList.remove('overflow-hidden');
            setShow(false);
          }}
          className="text-lg py-[1.625rem] px-4 font-semibold w-full text-neutral"
        >
          {label}
        </a>
      </Link>
    </li>
  );
};
