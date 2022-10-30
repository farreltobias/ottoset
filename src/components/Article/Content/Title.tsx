import { Title as MainTitle } from '@components/Texts';

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export const Title: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <MainTitle
      variant="h3"
      className={`mb-4 lg:text-5xl lg:leading-120 ${className}`}
    >
      {children}
    </MainTitle>
  );
};
