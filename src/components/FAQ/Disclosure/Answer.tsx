import { Text } from '@components/Texts';

export const Answer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Text variant="p2" className="text-secondary-600 pb-8">
      {children}
    </Text>
  );
};
