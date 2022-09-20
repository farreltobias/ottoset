type Props = React.PropsWithChildren<{
  bold?: boolean;
  className?: string;
}>;

export const P1: React.FC<Props> = ({ children, bold }) => (
  <p className={`text-2xl leading-150 ${bold ? 'font-bold' : 'font-normal'}`}>
    {children}
  </p>
);

export const P2: React.FC<Props> = ({ children, bold, className = '' }) => (
  <p
    className={`text-base leading-150 ${
      bold ? 'font-bold' : 'font-normal'
    } ${className}`}
  >
    {children}
  </p>
);

export const P3: React.FC<Props> = ({ children, bold }) => (
  <p className={`text-xs leading-150 ${bold ? 'font-bold' : 'font-normal'}`}>
    {children}
  </p>
);

export const P4: React.FC<Props> = ({ children, bold, className = '' }) => (
  <p
    className={`text-xs xl:text-sm leading-[1.125rem] ${
      bold ? 'font-bold' : 'font-normal'
    } ${className}`}
  >
    {children}
  </p>
);
