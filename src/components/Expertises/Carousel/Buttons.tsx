import Next from '@public/icons/next.svg';
import Prev from '@public/icons/prev.svg';

type Props = {
  enabled: boolean;
  onClick: () => void;
};

export const PrevButton: React.FC<Props> = ({ enabled, onClick }) => {
  return (
    <button
      aria-label="Ver área de atuação anterior"
      className="flex justify-center outline-none peer disabled:opacity-0 transition-opacity delay-200"
      onClick={onClick}
      disabled={!enabled}
    >
      <Prev className="h-8" />
    </button>
  );
};

export const NextButton: React.FC<Props> = ({ enabled, onClick }) => {
  return (
    <button
      aria-label="Ver próxima área de atuação"
      className="flex justify-center outline-none peer disabled:opacity-0 transition-opacity delay-200"
      onClick={onClick}
      disabled={!enabled}
    >
      <Next className="h-8" />
    </button>
  );
};
