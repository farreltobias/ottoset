import { forwardRef } from 'react';

const variants = {
  display1: 'text-[8.375rem] font-extrabold',
  display2: 'text-8xl leading-120 font-extrabold',
  display3: 'text-[4.75rem] leading-120 font-extrabold',
  display4: 'text-7xl leading-120 font-extrabold',
  h1: 'text-[4rem] leading-120 font-bold',
  h2: 'text-5xl leading-120 font-bold',
  h3: 'text-[2rem] leading-125 font-bold',
  h4: 'text-2xl leading-120 font-bold',
  h5: 'text-xl leading-120 font-bold',
  h6: 'text-base leading-120 font-bold',
};

const largeVarients = {
  display1: 'lg:text-[8.375rem] lg:font-extrabold',
  display2: 'lg:text-8xl lg:leading-120 lg:font-extrabold',
  display3: 'lg:text-[4.75rem] lg:leading-120 lg:font-extrabold',
  display4: 'lg:text-7xl lg:leading-120 lg:font-extrabold',
  h1: 'lg:text-[4rem] lg:leading-120 lg:font-bold',
  h2: 'lg:text-5xl lg:leading-120 lg:font-bold',
  h3: 'lg:text-[2rem] lg:leading-125 lg:font-bold',
  h4: 'lg:text-2xl lg:leading-120 lg:font-bold',
  h5: 'lg:text-xl lg:leading-120 lg:font-bold',
  h6: 'lg:text-base lg:leading-120 lg:font-bold',
};

const extraLargeVarients = {
  display1: 'xl:text-[8.375rem] xl:font-extrabold',
  display2: 'xl:text-8xl xl:leading-120 xl:font-extrabold',
  display3: 'xl:text-[4.75rem] xl:leading-120 xl:font-extrabold',
  display4: 'xl:text-7xl xl:leading-120 xl:font-extrabold',
  h1: 'xl:text-[4rem] xl:leading-120 xl:font-bold',
  h2: 'xl:text-5xl xl:leading-120 xl:font-bold',
  h3: 'xl:text-[2rem] xl:leading-125 xl:font-bold',
  h4: 'xl:text-2xl xl:leading-120 xl:font-bold',
  h5: 'xl:text-xl xl:leading-120 xl:font-bold',
  h6: 'xl:text-base xl:leading-120 xl:font-bold',
};

const mediumVarients = {
  display1: 'md:text-[8.375rem] md:font-extrabold',
  display2: 'md:text-8xl md:leading-120 md:font-extrabold',
  display3: 'md:text-[4.75rem] md:leading-120 md:font-extrabold',
  display4: 'md:text-7xl md:leading-120 md:font-extrabold',
  h1: 'md:text-[4rem] md:leading-120 md:font-bold',
  h2: 'md:text-5xl md:leading-120 md:font-bold',
  h3: 'md:text-[2rem] md:leading-125 md:font-bold',
  h4: 'md:text-2xl md:leading-120 md:font-bold',
  h5: 'md:text-xl md:leading-120 md:font-bold',
  h6: 'md:text-base md:leading-120 md:font-bold',
};

const smallVarients = {
  display1: 'sm:text-[8.375rem] sm:font-extrabold',
  display2: 'sm:text-8xl sm:leading-120 sm:font-extrabold',
  display3: 'sm:text-[4.75rem] sm:leading-120 sm:font-extrabold',
  display4: 'sm:text-7xl sm:leading-120 sm:font-extrabold',
  h1: 'sm:text-[4rem] sm:leading-120 sm:font-bold',
  h2: 'sm:text-5xl sm:leading-120 sm:font-bold',
  h3: 'sm:text-[2rem] sm:leading-125 sm:font-bold',
  h4: 'sm:text-2xl sm:leading-120 sm:font-bold',
  h5: 'sm:text-xl sm:leading-120 sm:font-bold',
  h6: 'sm:text-base sm:leading-120 sm:font-bold',
};

type Props = React.PropsWithChildren<{
  className?: string;
  center?: boolean;
  style?: React.CSSProperties;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div' | 'p';
  variant?: keyof typeof variants;
  xlVariant?: keyof typeof extraLargeVarients;
  largeVariant?: keyof typeof largeVarients;
  mediumVariant?: keyof typeof mediumVarients;
  smallVariant?: keyof typeof smallVarients;
}>;

const FowardFunction: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  Props
> = (
  {
    children,
    className = '',
    as = 'h1',
    variant = 'h1',
    xlVariant,
    largeVariant,
    mediumVariant,
    smallVariant,
    style,
    center = false,
  },
  ref,
) => {
  const Component = as;

  const variantClass = variants[variant];
  const largeVariantClass = largeVariant ? largeVarients[largeVariant] : '\b';
  const extraLargeVariantClass = xlVariant
    ? extraLargeVarients[xlVariant]
    : '\b';
  const mediumVariantClass = mediumVariant
    ? mediumVarients[mediumVariant]
    : '\b';
  const smallVariantClass = smallVariant ? smallVarients[smallVariant] : '\b';

  const centerClass = center ? 'text-center lg:text-left' : '\b';

  return (
    <Component
      ref={ref}
      className={`font-title ${centerClass} ${variantClass} ${smallVariantClass} ${mediumVariantClass} ${largeVariantClass} ${extraLargeVariantClass} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
};

export const Title = forwardRef(FowardFunction);
