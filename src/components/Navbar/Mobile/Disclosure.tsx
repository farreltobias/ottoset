import { Fragment, ReactNode } from 'react';
import { Disclosure as Menu, Transition } from '@headlessui/react';

import { Caps } from '@components/Text/titles';

type Props = {
  label: string;
  children: ReactNode[];
  id: string;
};

export const Disclosure: React.FC<Props> = ({ label, children, id }) => {
  return (
    <Menu as="li" className="list-none inline-block relative w-full">
      <Menu.Button className="py-[1.625rem] px-4 text-neutral text-left w-full">
        <Caps>{label}</Caps>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition-all ease-out duration-100"
        enterFrom="transform h-0"
        enterTo={`transform disclosure-item-height-${id}`}
        leave="transition-all ease-in duration-75"
        leaveFrom={`transform disclosure-item-height-${id}`}
        leaveTo="transform h-0"
      >
        <Menu.Panel
          as="ul"
          className="w-full px-5 bg-neutral-800 overflow-hidden"
        >
          {children}
        </Menu.Panel>
      </Transition>
    </Menu>
  );
};
