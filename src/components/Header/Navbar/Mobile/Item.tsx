import { useContext } from 'react';
import Link, { LinkProps } from 'next/link';

import { SidebarContext } from '@contexts/SidebarContext';

import { Caps } from '@components/Texts';

type Props = React.PropsWithChildren<
  LinkProps & {
    className?: string;
  }
>;

export const Item: React.FC<Props> = ({ children, className, ...props }) => {
  const { setShow } = useContext(SidebarContext);

  return (
    <li className={`flex bg-neutral-900 ${className}`}>
      <Link
        {...props}
        onClick={() => {
          document.body.classList.remove('overflow-hidden');
          setShow(false);
        }}
        className="py-[1.625rem] px-4 text-neutral"
      >
        <Caps>{children}</Caps>
      </Link>
    </li>
  );
};
