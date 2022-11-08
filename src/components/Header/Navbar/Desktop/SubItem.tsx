import Link from 'next/link';

import { Menu } from '@headlessui/react';

type Props = {
  className?: string;
  href: string;
  label: string;
};

export const SubItem: React.FC<Props> = ({ href, label, className = '' }) => {
  return (
    <Menu.Item as="li" className={`flex items-center ${className}`}>
      <Link
        href={href}
        className="text-sm xl:text-lg px-3 py-2 font-semibold w-full ui-active:text-primary-500 ui-not-active:text-neutral-900"
      >
        {label}
      </Link>
    </Menu.Item>
  );
};
