type Props = React.PropsWithChildren<
  {
    variant?: 'filled' | 'outline' | 'link';
    hover?: 'filled' | 'outline' | 'link';
  } & React.ComponentPropsWithoutRef<'button'>
>;

type Variant = {
  bg?: string;
  text?: string;
  hover?: string;
  border?: string;
  disabled?: string;
};

type Variants = Record<NonNullable<Props['variant']>, Variant>;

const vairents: Variants = {
  filled: {
    bg: 'bg-primary-600',
    text: 'text-neutral',
    hover:
      'hover:text-neutral hover:bg-neutral-900 hover:shadow-button hover:shadow-primary-600',
    disabled: 'bg-secondary-50 text-secondary-600',
  },
  outline: {
    bg: 'bg-neutral',
    text: 'text-primary-600',
    border: 'border border-primary-600',
    hover:
      'hover:bg-neutral hover:text-primary-600 hover:border hover:border-primary-600 hover:border-neutral-900 hover:text-neutral-900',
    disabled: 'bg-secondary-50 text-secondary-500 border border-secondary-500',
  },
  link: {
    bg: 'bg-transparent',
    text: 'text-secondary-900',
    hover:
      'hover:bg-transparent hover:text-secondary-900 hover:text-primary-500',
    disabled: 'bg-transparent text-secondary-500',
  },
};

export const Button: React.FC<Props> = ({
  children,
  className = '',
  disabled,
  variant = 'filled',
  hover,
  ...props
}) => {
  const {
    disabled: disabledStyle,
    hover: hoverStyles,
    ...rest
  } = vairents[variant];

  const hoverStyle = hover ? vairents[hover].hover : hoverStyles;

  const style = disabled
    ? `cursor-not-allowed ${disabledStyle} ${hoverStyle}`
    : Object.values(rest).join(' ');

  return (
    <button
      className={`flex items-center font-bold rounded px-4 py-2 transition-all ${style} ${hoverStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
