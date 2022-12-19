import { classNames } from '@utils/classNames';

type Props = React.PropsWithChildren<
  {
    variant?: 'filled' | 'outline' | 'link';
    hover?: 'filled' | 'outline' | 'link';
    group?: boolean;
  } & React.ComponentPropsWithoutRef<'button'>
>;

type Variant = {
  bg?: string;
  text?: string;
  hover?: string;
  border?: string;
  disabled?: string;
  group?: string;
};

type Variants = Record<NonNullable<Props['variant']>, Variant>;

const vairents: Variants = {
  filled: {
    bg: 'bg-primary-600',
    text: 'text-neutral',
    hover:
      'hover:text-neutral hover:bg-neutral-900 hover:shadow-button hover:shadow-primary-600',
    group:
      'group-hover:text-neutral group-hover:bg-neutral-900 group-hover:shadow-button group-hover:shadow-primary-600',
    disabled:
      'bg-secondary-50 text-secondary-600 hover:bg-secondary-50 hover:text-secondary-600 hover:shadow-none',
  },
  outline: {
    bg: 'bg-neutral',
    text: 'text-primary-600',
    border: 'border border-primary-600',
    hover:
      'hover:bg-neutral hover:text-primary-600 hover:border hover:border-primary-600 hover:border-neutral-900 hover:text-neutral-900',
    group:
      'group-hover:bg-neutral group-hover:text-primary-600 group-hover:border group-hover:border-primary-600 group-hover:border-neutral-900 group-hover:text-neutral-900',
    disabled: 'bg-secondary-50 text-secondary-500 border border-secondary-500',
  },
  link: {
    bg: 'bg-transparent',
    text: 'text-secondary-900',
    hover: 'hover:text-primary-500',
    group:
      'group-hover:bg-transparent group-hover:text-secondary-900 group-hover:text-primary-500',
    disabled: 'bg-transparent text-secondary-500 hover:!text-secondary-500',
  },
};

export const Button: React.FC<Props> = ({
  children,
  className = '',
  disabled,
  variant = 'filled',
  hover,
  group = false,
  ...props
}) => {
  const {
    disabled: disabledStyle,
    hover: hoverStyles,
    group: groupStyles,
    ...rest
  } = vairents[variant];

  const hoverStyle = hover ? vairents[hover].hover : hoverStyles;
  const groupStyle = hover ? vairents[variant].group : groupStyles;

  const hoverToApply = (group ? groupStyle : hoverStyle) || '';

  const style = disabled
    ? `cursor-not-allowed ${disabledStyle} ${hoverStyle}`
    : Object.values(rest).join(' ');

  const padding = /p-\d|\[/g.test(className) ? '' : 'px-4 py-2';

  return (
    <button
      className={classNames(
        'flex items-center font-title font-bold text-lg rounded outline-none transition-all',
        padding,
        style,
        hoverToApply,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
