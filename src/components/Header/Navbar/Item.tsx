import Link, { LinkProps } from 'next/link';
import { Caps } from '../../Text/titles';

type Props = React.PropsWithChildren<
  LinkProps & {
    className?: string;
    dark?: boolean;
  }
>;

export const Item: React.FC<Props> = ({
  children,
  className,
  dark = false,
  ...props
}) => {
  const style = dark
    ? 'text-neutral'
    : 'text-neutral-900 hover:text-primary-600';

  const background = dark ? 'bg-neutral-900' : 'bg-neutral';

  return (
    <li className={`flex list-none ${background} ${className}`}>
      <Link {...props}>
        <a className={`py-[1.625rem] px-4 ${style}`}>
          <Caps>{children}</Caps>
        </a>
      </Link>
    </li>
  );
};
