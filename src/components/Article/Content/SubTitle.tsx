import { Title as MainTitle } from '@components/Texts';

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export const SubTitle: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <MainTitle as="h2" variant="h6" className={`mb-2 ${className}`}>
      {children}
    </MainTitle>
  );
};
