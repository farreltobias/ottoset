import { useEffect, useState } from 'react';

type Data = {
  page: number;
  total_pages: number;
};

type Props = {
  data: Data;
  ref: React.RefObject<HTMLUListElement>;
  handleSearch: () => Promise<void>;
  pageToUse?: number;
};

export const useInfiniteScroll = ({
  data,
  ref,
  handleSearch,
  pageToUse = 1,
}: Props) => {
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    const maxPageHasReached = data.page >= data.total_pages;

    if (maxPageHasReached || loading) return;

    const { children } = ref.current || {};

    const lastDataLoaded = children?.[children.length - 1];

    if (!lastDataLoaded) return;

    const { top, bottom } = lastDataLoaded.getBoundingClientRect();
    const isOnScreen =
      (top >= 0 && top <= window.innerHeight) ||
      (bottom >= 0 && bottom <= window.innerHeight);

    if (!isOnScreen) return;

    const { offsetTop, clientHeight } = lastDataLoaded as HTMLLIElement;
    const lastDataLoadedOffset = offsetTop + clientHeight;

    const pageOffset = window.scrollY + window.innerHeight;

    const lastDataLodedIsVisible = pageOffset > lastDataLoadedOffset;

    if (!lastDataLodedIsVisible || loading) return;

    setLoading(true);

    handleSearch();

    setLoading(false);
  };

  const handleScroll = () => {
    const shouldLoad = data.page >= pageToUse;

    if (!shouldLoad) return;

    loadMore();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return { loading };
};
