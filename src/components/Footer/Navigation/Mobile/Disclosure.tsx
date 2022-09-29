import { Fragment, ReactNode } from 'react';
import { Disclosure as Menu, Transition } from '@headlessui/react';

import Arrow from '@public/navigation/arrow-right.svg';

import { Title } from '@components/Texts';

type Props = {
  label: string;
  children: ReactNode[];
  id: string;
};

export const Disclosure: React.FC<Props> = ({ label, children, id }) => {
  return (
    <Menu as="li" className="inline-block relative w-full">
      {({ open }) => (
        <>
          <Menu.Button className="text-left w-full">
            <Title
              as="span"
              variant="h6"
              className="flex items-center justify-between"
            >
              {label}
              <Arrow
                className={`transition-transform duration-300 my-3 ${
                  open ? `transform -rotate-90` : ''
                }`}
              />
            </Title>
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition-all ease-disclosure duration-300"
            enterFrom="transform h-0"
            enterTo={`transform footer-disclosure-item-height-${id}`}
            leave="transition-all ease-disclosure duration-300"
            leaveFrom={`transform footer-disclosure-item-height-${id}`}
            leaveTo="transform h-0"
          >
            <Menu.Panel as="ul" className="w-full overflow-hidden">
              {children}
            </Menu.Panel>
          </Transition>
        </>
      )}
    </Menu>
  );
};
