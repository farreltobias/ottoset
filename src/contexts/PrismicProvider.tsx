import Link from 'next/link';

import { PrismicPreview } from '@prismicio/next';
import {
  JSXMapSerializer,
  PrismicProvider as Provider,
} from '@prismicio/react';

import { reactClient, repositoryName } from 'prismicio';

const richTextComponents: JSXMapSerializer = {
  heading1: ({ children }) => <>{children}</>,
  heading2: ({ children }) => <>{children}</>,
  paragraph: ({ children }) => <>{children}</>,
};

type Props = React.PropsWithChildren<{}>;

export const PrismicProvider: React.FC<Props> = ({ children }) => {
  return (
    <Provider
      internalLinkComponent={({ ...props }) => <Link {...props} />}
      richTextComponents={richTextComponents}
      client={reactClient}
    >
      <PrismicPreview repositoryName={repositoryName}>
        {children}
      </PrismicPreview>
    </Provider>
  );
};
