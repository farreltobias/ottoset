import { Button } from './Button';

type Props = {
  previousProject?: string | null;
  nextProject?: string | null;
};

export const Footer: React.FC<Props> = ({ previousProject, nextProject }) => {
  return (
    <footer className="flex w-full justify-between mt-6 mb-8 lg:mt-8 lg:mb-12">
      <Button url={previousProject}>Anterior</Button>
      <Button url={nextProject}>Próximo</Button>
    </footer>
  );
};
