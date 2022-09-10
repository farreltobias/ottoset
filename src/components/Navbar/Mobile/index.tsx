import { Children, useState } from 'react';
import { Transition } from '@headlessui/react';

import { Hamburguer } from '@components/Hamburguer';
import { Item } from '@components/Navbar/Mobile/Item';

import { navLinks } from '@utils/navLinks';

import { Disclosure } from './Disclosure';
import { SubItem } from './SubItem';

export const Mobile: React.FC<React.PropsWithChildren> = () => {
  const [show, setShow] = useState(false);

  const styles = navLinks.reduce((acc, { dropdown }, index) => {
    if (!dropdown) return acc;

    const className = `disclosure-item-height-${index}`;
    const style = `.${className} { height: ${dropdown.length * 5}rem; }\n`;

    return acc + style;
  }, '');

  const NavList = navLinks.map(({ label, href, dropdown }, index) =>
    dropdown ? (
      <Disclosure label={label} id={index.toString()}>
        {Children.toArray(
          dropdown.map((item) => (
            <SubItem href={item.href} label={item.label} />
          ))
        )}
      </Disclosure>
    ) : (
      <Item href={href} className="child:w-full">
        {label}
      </Item>
    )
  );

  return (
    <>
      <style jsx>{styles}</style>
      <Hamburguer setShow={setShow} show={show} />

      <Transition
        as="div"
        show={show}
        enter="transition-all duration-300"
        enterFrom="-right-full"
        enterTo="right-0"
        leave="transition-all duration-150"
        leaveFrom="right-0"
        leaveTo="-right-full"
        className="block lg:hidden bg-neutral-900 h-screen w-screen fixed top-0 z-10 pt-28 overflow-auto"
      >
        <ul className="container mx-auto h-full w-full list-none">
          {Children.toArray(NavList)}
        </ul>
      </Transition>
    </>
  );
};
