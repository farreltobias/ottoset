import React from 'react';

import { SWRConfig } from 'swr';

import { localStorageProvider } from '@utils/localStorageProvider';

const ONE_HOUR = 1000 * 60 * 60;

export const SWRProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <SWRConfig
      value={{
        provider: localStorageProvider,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
        refreshInterval: ONE_HOUR,
        revalidateOnFocus: false,
        revalidateOnMount: false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
      }}
    >
      {children}
    </SWRConfig>
  );
};
