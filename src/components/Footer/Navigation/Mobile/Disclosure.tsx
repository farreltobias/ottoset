import { Fragment, ReactNode } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import Arrow from '@public/navigation/arrow-right.svg';

import { Title } from '@components/Texts';

import { Disclosure as Menu } from '@headlessui/react';

type Props = {
  label: string;
  children: ReactNode[];
};

export const Disclosure: React.FC<Props> = ({ label, children }) => {
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
              <Arrow className="transition-transform duration-300 my-3 transform ui-open:-rotate-90" />
            </Title>
          </Menu.Button>

          <AnimatePresence>
            {open && (
              <Menu.Panel
                static
                as={motion.ul}
                className="w-full overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
              >
                {children}
              </Menu.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  );
};
