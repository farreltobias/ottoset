import { useContext } from 'react';

import { motion } from 'framer-motion';

import { SidebarContext } from '@contexts/SidebarContext';

export const Hamburguer: React.FC = () => {
  const { show, setShow } = useContext(SidebarContext);

  return (
    <button
      onClick={() => {
        document.body.classList.toggle('overflow-hidden');
        setShow(!show);
      }}
      className="flex lg:hidden z-20 flex-col items-center justify-center"
    >
      <motion.div
        className={`w-8 h-1 transition-all duration-200 ${
          show
            ? 'bg-neutral rotate-45 origin-top-left mb-[0.8125rem]'
            : 'bg-neutral-900 mb-1'
        }`}
      />
      <motion.div
        className="w-8 mb-1 bg-neutral-900"
        initial={{ height: 0 }}
        animate={{ height: show ? 0 : 4 }}
      />
      <motion.div
        className={`w-8 h-1 transition-all duration-200 ${
          show
            ? 'bg-neutral -rotate-45 origin-bottom-left'
            : 'bg-neutral-900 mb-1'
        }`}
      />
    </button>
  );
};
