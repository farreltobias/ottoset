import { Children } from 'react';
import { Button } from '../../Button';
import { Caps } from '../../Text/titles';
import { Item } from './Item';

import { navLinks } from '../../../utils/navLinks';

export const DesktopNavbar: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <div className="hidden lg:flex">
        {Children.toArray(
          navLinks.map(({ label, href }, index) => (
            <Item href={href}>{label}</Item>
          ))
        )}
      </div>
      <Button className="hidden lg:flex">
        <Caps>Fale conosco</Caps>
      </Button>
    </>
  );
};
