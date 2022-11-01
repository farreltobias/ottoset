import { Title } from '@components/Texts';

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export const Question: React.FC<Props> = ({ children }) => {
  return (
    <Title
      as="span"
      variant="h4"
      className="ui-open:text-primary-500 transition-colors text-left"
    >
      {children}
    </Title>
  );
};
