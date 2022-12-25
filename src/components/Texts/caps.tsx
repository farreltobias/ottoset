import React from 'react';

import { classNames } from '@utils/classNames';

type Props = React.PropsWithChildren<{
  className?: string;
  style?: React.CSSProperties;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div' | 'p';
  variant?: 'title' | 'text';
}>;

const FowardFunction: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  Props
> = (
  { children, className = '', as = 'span', variant = 'title', style },
  ref,
) => {
  const Component = as;

  const font = variant === 'title' ? 'font-title' : 'font-body';
  const leading = className.includes('leading-') ? '' : 'leading-150';

  return (
    <Component
      ref={ref}
      className={classNames('uppercase font-bold', font, leading, className)}
      style={style}
    >
      {children}
    </Component>
  );
};

export const Caps = React.forwardRef(FowardFunction);
