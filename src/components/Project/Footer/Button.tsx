import Link from 'next/link';

import { Maybe } from 'src/types/generated/graphql';

import { Button as DefaultButton } from '@components/Button';

export type RelatedProjectType = {
  slug: Maybe<string>;
  cursor: Maybe<string>;
};

type Props = React.PropsWithChildren<{
  project: RelatedProjectType;
}>;

export const Button: React.FC<Props> = ({
  project: { slug, cursor },
  children,
}) => {
  return (
    <>
      {!slug ? (
        <DefaultButton disabled variant="link">
          {children}
        </DefaultButton>
      ) : (
        <Link
          href={{
            pathname: '/projetos/[slug]',
            query: { slug, cursor },
          }}
        >
          <DefaultButton variant="link">{children}</DefaultButton>
        </Link>
      )}
    </>
  );
};
