const variants = {
  p1: 'text-2xl leading-150',
  p2: 'text-base leading-150',
  p3: 'text-xs leading-150',
  p4: 'text-xs xl:text-sm leading-[1.125rem]',
};

const largeVarients = {
  p1: 'lg:text-2xl lg:leading-150',
  p2: 'lg:text-base lg:leading-150',
  p3: 'lg:text-xs lg:leading-150',
  p4: 'lg:text-xs lg:xl:text-sm lg:leading-[1.125rem]',
};

type Props = React.PropsWithChildren<{
  variant?: keyof typeof variants;
  largeVariant?: keyof typeof largeVarients;
  center?: boolean;
  className?: string;
  as?: 'p' | 'span' | 'div' | 'li' | 'label';
}>;

export const Text: React.FC<Props> = ({
  children,
  className = '',
  variant = 'p1',
  largeVariant,
  center = false,
  as = 'p',
}) => {
  const Component = as;

  const variantClass = variants[variant];
  const largeVariantClass = largeVariant ? largeVarients[largeVariant] : '';

  const centerClass = center ? 'text-center lg:text-left' : '';

  return (
    <Component
      className={`${centerClass} ${variantClass} ${largeVariantClass} ${className}`}
    >
      {children}
    </Component>
  );
};
