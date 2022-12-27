import useSWR from 'swr';

import { Response } from '@pages/api/instagram-feed';

export const getKey = (limit = 12) => `/api/instagram-feed?limit=${limit}`;

export const useInstagram = (limit = 12) => {
  const key = getKey(limit);

  return useSWR<Response>(key, {
    onError() {
      console.error('Error fetching Instagram images');
      localStorage.removeItem(key);
    },
    onSuccess({ data }) {
      localStorage.setItem(key, JSON.stringify(data));
    },
  });
};
