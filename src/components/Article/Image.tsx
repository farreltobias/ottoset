import { classNames } from '@utils/classNames';

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export const Image: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <div className={classNames('relative w-full', className)}>{children}</div>
  );
};
