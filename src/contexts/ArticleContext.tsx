import { createContext } from 'react';

type ContextType = {
  order: 'left' | 'right';
};

type Props = React.PropsWithChildren<{
  order: 'left' | 'right';
}>;

export const ArticleContext = createContext<ContextType>({} as ContextType);

export const ArticleProvider: React.FC<Props> = ({
  children,
  order = 'left',
}) => {
  return (
    <ArticleContext.Provider value={{ order }}>
      {children}
    </ArticleContext.Provider>
  );
};
