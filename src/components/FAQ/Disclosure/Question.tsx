import { Title } from '@components/Texts';

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export const Question: React.FC<Props> = ({ children }) => {
  return (
    <Title as="span" variant="h4" className="text-left">
      {children}
    </Title>
  );
};
