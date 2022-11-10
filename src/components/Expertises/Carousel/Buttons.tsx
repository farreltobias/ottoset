import Flecha from '@public/navigation/flecha.svg';

type Props = {
  enabled: boolean;
  onClick: () => void;
};

export const PrevButton: React.FC<Props> = ({ enabled, onClick }) => {
  return (
    <button
      className="flex justify-center outline-none peer disabled:opacity-0 rotate-90 transition-opacity delay-200"
      onClick={onClick}
      disabled={!enabled}
    >
      <Flecha className="fill-neutral w-2/3 lg:w-full" />
    </button>
  );
};

export const NextButton: React.FC<Props> = ({ enabled, onClick }) => {
  return (
    <button
      className="flex justify-center outline-none peer disabled:opacity-0 -rotate-90 transition-opacity delay-200"
      onClick={onClick}
      disabled={!enabled}
    >
      <Flecha className="fill-neutral w-2/3 lg:w-full" />
    </button>
  );
};
