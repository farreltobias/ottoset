import { createContext } from 'react';

type ContextType = {
  isOpen: boolean;
};

type Props = React.PropsWithChildren<{
  isOpen: boolean;
}>;

export const DisclosureContext = createContext<ContextType>({} as ContextType);

export const DisclosureProvider: React.FC<Props> = ({ children, isOpen }) => {
  return (
    <DisclosureContext.Provider value={{ isOpen }}>
      {children}
    </DisclosureContext.Provider>
  );
};
