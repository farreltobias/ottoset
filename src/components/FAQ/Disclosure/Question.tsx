import { useContext } from 'react';

import { DisclosureContext } from '@contexts/DisclosureContext';

import { Title } from '@components/Texts';

import { Icon } from './Icon';

type Props = React.PropsWithChildren<{
  className?: string;
  isOpen?: boolean;
}>;

export const Question: React.FC<Props> = ({ children }) => {
  const { isOpen } = useContext(DisclosureContext);

  return (
    <Title
      as="h2"
      variant="h4"
      className="flex justify-between items-center text-left w-full"
    >
      {children}
      <Icon isOpen={isOpen} />
    </Title>
  );
};
