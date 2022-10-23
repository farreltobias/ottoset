import { Title } from '../titles';

export const SubTitle: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Title
      as="span"
      variant="h3"
      className="block text-neutral-900 -mt-6 sm:-mt-8 lg:-mt-11 sm:text-5xl sm:leading-120 lg:text-7xl lg:font-extrabold"
    >
      {children}
    </Title>
  );
};
