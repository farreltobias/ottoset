import { useEffect, useState } from 'react';

import { screens } from 'tailwindcss/defaultTheme';

export const useWindowSize = () => {
  const desktopWidth = Number(screens.lg.match(/\d+/g)?.[0]);
  const [width, setWidth] = useState<number | null>(null);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    handleWindowSizeChange();

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return { width, desktopWidth };
};
