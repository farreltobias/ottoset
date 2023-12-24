import { useContext } from 'react';
import Link from 'next/link';

import { SidebarContext } from '@contexts/SidebarContext';

import { classNames } from '@utils/classNames';

type Props = {
  className?: string;
  href: string;
  label: string;
  target?: string;
};

export const SubItem: React.FC<Props> = ({
  href,
  label,
  target,
  className = '',
}) => {
  const { setShow } = useContext(SidebarContext);
  return (
    <li className={classNames('flex items-center', className)}>
      <Link
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        onClick={() => {
          document.body.classList.remove('overflow-hidden');
          setShow(false);
        }}
        className="text-lg py-[1.625rem] px-4 font-semibold w-full text-neutral"
      >
        {label}
      </Link>
    </li>
  );
};
