import { Text as MainText } from '@components/Texts';

import { classNames } from '@utils/classNames';

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export const Text: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <MainText variant="p2" className={classNames('mb-8', className)}>
      {children}
    </MainText>
  );
};
