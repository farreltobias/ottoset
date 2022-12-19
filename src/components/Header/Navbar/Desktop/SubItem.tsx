import Link from 'next/link';

import { classNames } from '@utils/classNames';

import { Menu } from '@headlessui/react';

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
  return (
    <Menu.Item as="li" className={classNames('flex items-center', className)}>
      <Link
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className="text-sm xl:text-lg px-3 py-2 font-semibold w-full ui-active:text-primary-500 ui-not-active:text-neutral-900"
      >
        {label}
      </Link>
    </Menu.Item>
  );
};
