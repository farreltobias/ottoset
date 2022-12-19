import { Button as MainButton } from '@components/Button';

import { classNames } from '@utils/classNames';

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export const Button: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <MainButton
      variant="outline"
      className={classNames(
        'justify-center lg:justify-start font-title max-w-md w-full lg:w-fit group mt-2',
        className,
      )}
    >
      {children}
    </MainButton>
  );
};
