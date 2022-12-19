import { Title as MainTitle } from '@components/Texts';

import { classNames } from '@utils/classNames';

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export const SubTitle: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <MainTitle as="h2" variant="h6" className={classNames('mb-2', className)}>
      {children}
    </MainTitle>
  );
};
