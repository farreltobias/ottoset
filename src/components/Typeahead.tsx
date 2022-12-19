import React from 'react';

import SearchIcon from '@public/navigation/search.svg';

import { Text } from '@components/Texts';

import { classNames } from '@utils/classNames';

type Props = {
  onChange: (value: string) => void;
  className?: string;
};

const FowardFunction: React.ForwardRefRenderFunction<
  HTMLInputElement,
  Props
> = ({ onChange, className = '' }, ref) => {
  return (
    <Text
      as="span"
      className={classNames(
        'flex items-center border-b border-b-secondary-300 mb-12',
        className,
      )}
    >
      <input
        ref={ref}
        onChange={(e) => onChange(e.target.value)}
        type="search"
        placeholder="Pesquisar"
        className="w-full py-4 border-none outline-none"
      />
      <SearchIcon width={32} height={32} />
    </Text>
  );
};

export const Typeahead = React.forwardRef(FowardFunction);
