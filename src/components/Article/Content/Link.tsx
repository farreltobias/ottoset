import NextLink from 'next/link';

import { UrlObject } from 'url';

import { Button } from '@components/Button';

import { classNames } from '@utils/classNames';

type Props = React.PropsWithChildren<{
  text: string;
  className?: string;
  href: string | UrlObject;
}>;

export const Link: React.FC<Props> = ({
  children,
  className = '',
  href,
  text,
}) => {
  return (
    <NextLink
      href={href}
      aria-label={text}
      className={classNames('max-w-md w-full lg:w-fit mt-2', className)}
    >
      <Button
        variant="outline"
        className="justify-center lg:justify-start font-title w-full lg:w-fit lg:px-12 gap-x-2 group"
      >
        {children}
      </Button>
    </NextLink>
  );
};
