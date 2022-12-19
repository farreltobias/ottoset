import { ReactNode } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { Caps } from '@components/Texts';

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
          <Menu.Button className="py-[1.625rem] px-4 text-neutral text-left w-full">
            <Caps>{label}</Caps>
          </Menu.Button>

          <AnimatePresence>
            {open && (
              <Menu.Panel
                static
                as={motion.ul}
                className="w-full px-5 bg-neutral-800 overflow-hidden"
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
