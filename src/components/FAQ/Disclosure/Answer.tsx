import { Text } from '@components/Texts';

export const Answer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Text as="p" variant="p2" className="text-secondary-600">
      {children}
    </Text>
  );
};
