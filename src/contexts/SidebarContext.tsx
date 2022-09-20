import { createContext, useState } from 'react';

type ContextType = {
  show: boolean;
  setShow: (show: boolean) => void;
};

export const SidebarContext = createContext<ContextType>({} as ContextType);

export const SidebarProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [show, setShow] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        show,
        setShow,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
