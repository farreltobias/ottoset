import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { Caps } from '@components/Texts';

type Props = React.PropsWithChildren<{
  label: string;
}>;

export const Dropdown: React.FC<Props> = ({ children, label }) => {
  return (
    <Menu as="li" className=" inline-block relative text-left">
      <Menu.Button className="py-[1.625rem] px-4 text-neutral-900 hover:text-primary-600 bg-neutral">
        <Caps className="text-xs xl:text-base">{label}</Caps>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-4 mt-2 px-9 pt-5 pb-7 origin-top-left bg-neutral shadow-lg border-t-4 border-t-primary-700 whitespace-nowrap">
          <div className="px-2 py-4 uppercase lg:text-xs xl:text-sm font-semibold">
            {label}
          </div>
          <ul className="w-full">{children}</ul>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
