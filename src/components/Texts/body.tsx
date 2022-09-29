type Props = React.PropsWithChildren<{
  variant?: keyof typeof variants;
  className?: string;
  as?: 'p' | 'span' | 'div' | 'li';
}>;

const variants = {
  p1: 'text-2xl leading-150',
  p2: 'text-base leading-150',
  p3: 'text-xs leading-150',
  p4: 'text-xs xl:text-sm leading-[1.125rem]',
};

export const Text: React.FC<Props> = ({
  children,
  className = '',
  variant = 'p1',
  as = 'p',
}) => {
  const Component = as;

  return (
    <Component className={`${variants[variant]} ${className}`}>
      {children}
    </Component>
  );
};
