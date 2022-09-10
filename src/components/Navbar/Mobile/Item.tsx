import Link, { LinkProps } from 'next/link';

import { Caps } from '@components/Text/titles';

type Props = React.PropsWithChildren<
  LinkProps & {
    className?: string;
  }
>;

export const Item: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <li className={`flex list-none bg-neutral-900 ${className}`}>
      <Link {...props}>
        <a className="py-[1.625rem] px-4 text-neutral">
          <Caps>{children}</Caps>
        </a>
      </Link>
    </li>
  );
};
