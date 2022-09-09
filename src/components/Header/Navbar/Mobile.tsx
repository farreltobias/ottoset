import { Children, useState } from 'react';
import { Transition } from '@headlessui/react';
import { Hamburguer } from '../../Hamburguer';
import { navLinks } from '../../../utils/navLinks';
import { Item } from './Item';

export const MobileNavbar: React.FC<React.PropsWithChildren> = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Hamburguer setShow={setShow} show={show} />

      <Transition
        as="ul"
        show={show}
        enter="transition-all duration-300"
        enterFrom="-right-full"
        enterTo="right-0"
        leave="transition-all duration-150"
        leaveFrom="right-0"
        leaveTo="-right-full"
        className="bg-neutral-900 h-screen w-screen fixed top-0 z-10 pt-28 list-none"
      >
        {Children.toArray(
          navLinks.map(({ label, href }) => (
            <Item dark href={href} className="child:w-full">
              {label}
            </Item>
          ))
        )}
      </Transition>
    </>
  );
};
