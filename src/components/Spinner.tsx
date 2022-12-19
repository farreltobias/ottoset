import { classNames } from '@utils/classNames';

const sizes = {
  1: 'w-6 h-6',
  2: 'w-8 h-8',
  3: 'w-16 h-16',
  4: 'w-24 h-24',
};

const colors = {
  white: 'border-neutral',
  black: 'border-neutral-900',
  gray: 'border-secondary-500',
};

const borders = {
  1: 'border-4',
  2: 'border-[5px]',
  3: 'border-[6px]',
  4: 'border-[8px]',
};

type Props = {
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
};

export const Spinner: React.FC<Props> = ({ size = 1, color = 'white' }) => {
  return (
    <div
      className={classNames(
        'border-b-transparent rounded-full animate-spin',
        sizes[size],
        borders[size],
        colors[color],
      )}
    />
  );
};
