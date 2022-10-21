import { forwardRef } from 'react';

type Props = React.PropsWithChildren<{
  className?: string;
  style?: React.CSSProperties;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div' | 'p';
  variant?: keyof typeof variants;
}>;

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

const FowardFunction: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  Props
> = ({ children, className = '', as = 'h1', variant = 'h1', style }, ref) => {
  const Component = as;

  return (
    <Component
      ref={ref}
      className={`font-title ${variants[variant]} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
};

export const Title = forwardRef(FowardFunction);
