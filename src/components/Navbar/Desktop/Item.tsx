import Link, { LinkProps } from 'next/link';

import { Title } from '@components/Text/titles';

type Props = React.PropsWithChildren<
  LinkProps & {
    className?: string;
  }
>;

export const Item: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <li className={`flex list-none bg-neutral ${className}`}>
      <Link {...props}>
        <a className="py-[1.625rem] px-4 text-neutral-900 hover:text-primary-600">
          <Title as="span" variant="caps" className="text-xs xl:text-base">
            {children}
          </Title>
        </a>
      </Link>
    </li>
  );
};
