import { SidebarContext } from '@contexts/SidebarContext';
import { useContext } from 'react';

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
      <div
        className={`w-8 h-1 transition-all duration-200 ${
          show
            ? 'bg-neutral rotate-45 origin-top-left mb-[0.8125rem]'
            : 'bg-neutral-900 mb-1'
        }`}
      />
      <div
        className={`w-8 transition-all mb-1 duration-200 bg-neutral-900 ${
          show ? 'h-0' : 'h-1'
        }`}
      />
      <div
        className={`w-8 h-1 transition-all duration-200 ${
          show
            ? 'bg-neutral -rotate-45 origin-bottom-left'
            : 'bg-neutral-900 mb-1'
        }`}
      />
    </button>
  );
};
