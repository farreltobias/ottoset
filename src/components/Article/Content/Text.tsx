import { Text as MainText } from '@components/Texts';

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export const Text: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <MainText variant="p2" className={`mb-8 ${className}`}>
      {children}
    </MainText>
  );
};
