type Props = React.PropsWithChildren<
  {
    variant?: 'filled' | 'outline' | 'link';
  } & React.ComponentPropsWithoutRef<'button'>
>;

type Variant = {
  bg?: string;
  text?: string;
  hover?: string;
  border?: string;
  disabled?: string;
};

type Variants = {
  [key in NonNullable<Props['variant']>]: Variant;
};

const vairents: Variants = {
  filled: {
    bg: 'bg-primary-500',
    text: 'text-neutral',
    hover: 'hover:bg-neutral-900 hover:shadow-button hover:shadow-primary-600',
    disabled: 'bg-secondary-50 text-secondary-500',
  },
  outline: {
    bg: 'bg-neutral',
    text: 'text-primary-500',
    border: 'border border-primary-500',
    hover: 'hover:border-neutral-900 hover:text-neutral-900',
    disabled: 'bg-secondary-50 text-secondary-500 border border-secondary-500',
  },
  link: {
    bg: 'bg-transparent',
    text: 'text-secondary-900',
    hover: 'hover:text-primary-500',
    disabled: 'bg-transparent text-secondary-500',
  },
};

export const Button: React.FC<Props> = ({
  children,
  className,
  disabled,
  variant = 'filled',
  ...props
}) => {
  const { disabled: disabledStyle, ...rest } = vairents[variant];

  const style = disabled
    ? `cursor-not-allowed ${disabledStyle}`
    : Object.values(rest).join(' ');

  const classNames = `flex font-bold py-2 px-4 rounded ${style} ${
    className || ''
  }`;

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};
