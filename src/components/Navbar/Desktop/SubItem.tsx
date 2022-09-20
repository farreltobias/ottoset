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
      {({ active }) => (
        <Link href={href}>
          <a
            className={`text-sm xl:text-lg px-3 py-2 font-semibold w-full ${
              active ? 'text-primary-500' : 'text-neutral-900'
            }`}
          >
            {label}
          </a>
        </Link>
      )}
    </Menu.Item>
  );
};
