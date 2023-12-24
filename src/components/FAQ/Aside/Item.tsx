import { Dispatch, SetStateAction } from 'react';

import { classNames } from '@utils/classNames';

type Props = {
  item: string;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};

export const Item: React.FC<Props> = ({ category, item, setCategory }) => {
  const handleClick = () => {
    setCategory(item);
  };

  return (
    <li
      className={classNames(
        'py-1',
        item === category ? 'text-primary-500 font-bold' : 'text-neutral-900',
      )}
    >
      <button className="outline-none" onClick={handleClick}>
        {item}
      </button>
    </li>
  );
};
