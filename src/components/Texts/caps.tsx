type Props = React.PropsWithChildren<{
  className?: string;
  style?: React.CSSProperties;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
  variant?: 'title' | 'text';
}>;

export const Caps: React.FC<Props> = ({
  children,
  className = '',
  as = 'span',
  variant = 'title',
  style,
}) => {
  const Component = as;

  const font = variant === 'title' ? 'font-title' : 'font-body';

  return (
    <Component
      className={`${font} leading-150 uppercase font-bold ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
};
