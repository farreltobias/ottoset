import { Title } from '@components/Texts';

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export const Question: React.FC<Props> = ({ children }) => {
  return (
    <Title as="h2" variant="h4" className="text-left">
      {children}
    </Title>
  );
};
