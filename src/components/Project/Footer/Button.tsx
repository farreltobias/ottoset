import Link from 'next/link';

import { Button as DefaultButton } from '@components/Button';

type Props = React.PropsWithChildren<{
  url?: string | null;
}>;

export const Button: React.FC<Props> = ({ url, children }) => {
  return (
    <>
      {!url ? (
        <DefaultButton disabled variant="link">
          {children}
        </DefaultButton>
      ) : (
        <Link href={url}>
          <DefaultButton variant="link">{children}</DefaultButton>
        </Link>
      )}
    </>
  );
};
