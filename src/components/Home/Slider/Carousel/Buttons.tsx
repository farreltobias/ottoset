import Flecha from '@public/navigation/flecha.svg';

import { Text } from '@components/Texts';

import { classNames } from '@utils/classNames';

type Props = {
  enabled: boolean;
  onClick: () => void;
  total: number;
  current: number;
};

export const PrevButton: React.FC<Props> = ({
  enabled,
  onClick,
  total,
  current,
}) => (
  <div className="absolute top-10 translate-x-2 lg:top-1/2 lg:-translate-y-1/2 flex items-center children:transition-opacity children:delay-200">
    <button
      aria-label="Ver projeto anterior"
      className="flex justify-center outline-none peer disabled:opacity-0 rotate-90"
      onClick={onClick}
      disabled={!enabled}
    >
      <Flecha className="fill-neutral w-2/3 lg:w-full" />
    </button>
    <Text
      variant="p2"
      largeVariant="p1"
      as="span"
      className={classNames(
        'ml-2 lg:ml-6 text-neutral',
        current + 1 !== total ? 'opacity-0' : 'opacity-100',
      )}
    >
      {current + 1} / {total}
    </Text>
  </div>
);

export const NextButton: React.FC<Props> = ({
  enabled,
  onClick,
  total,
  current,
}) => (
  <div className="absolute right-0 top-10 -translate-x-2 lg:top-1/2 lg:-translate-y-1/2 flex flex-row-reverse items-center children:transition-opacity children:delay-200">
    <button
      aria-label="Ver próximo projeto"
      className="flex justify-center outline-none peer disabled:opacity-0 -rotate-90"
      onClick={onClick}
      disabled={!enabled}
    >
      <Flecha className="fill-neutral w-2/3 lg:w-full" />
    </button>
    <Text
      variant="p2"
      largeVariant="p1"
      as="span"
      className="mr-2 lg:mr-6 peer-disabled:opacity-0 text-neutral"
    >
      {current + 1} / {total}
    </Text>
  </div>
);
