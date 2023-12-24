import { Title } from '../titles';

export const SubTitle: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Title
      as="span"
      variant="h3"
      smallVariant="h2"
      largeVariant="display4"
      className="block text-neutral-900 -mt-6 sm:-mt-8 lg:-mt-14"
    >
      {children}
    </Title>
  );
};
