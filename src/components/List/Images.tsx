import { classNames } from '@utils/classNames';

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export const Images: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <div
      className={classNames(
        'flex items-center justify-center lg:w-1/2',
        className,
      )}
    >
      {children}
    </div>
  );
};
