type Props = React.PropsWithChildren<{
  bold?: boolean;
}>;

export const P1: React.FC<Props> = ({ children, bold }) => (
  <p className={`text-2xl leading-150 ${bold ? 'font-bold' : 'font-medium'}`}>
    {children}
  </p>
);

export const P2: React.FC<Props> = ({ children, bold }) => (
  <p className={`text-base leading-150 ${bold ? 'font-bold' : 'font-medium'}`}>
    {children}
  </p>
);

export const P3: React.FC<Props> = ({ children, bold }) => (
  <p className={`text-xs leading-150 ${bold ? 'font-bold' : 'font-medium'}`}>
    {children}
  </p>
);
