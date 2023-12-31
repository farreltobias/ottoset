import Link, { LinkProps } from 'next/link';

import { Caps } from '@components/Texts';

import { classNames } from '@utils/classNames';

type Props = React.PropsWithChildren<
  LinkProps & {
    className?: string;
  }
>;

export const Item: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <li className={classNames('flex bg-neutral', className || '')}>
      <Link
        {...props}
        className="py-[1.625rem] px-4 text-neutral-900 hover:text-primary-600"
      >
        <Caps className="text-xs xl:text-base">{children}</Caps>
      </Link>
    </li>
  );
};
