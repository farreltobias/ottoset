import { Button, RelatedProjectType } from './Button';

type Props = {
  previousProject: RelatedProjectType;
  nextProject: RelatedProjectType;
};

export const Footer: React.FC<Props> = ({ previousProject, nextProject }) => {
  return (
    <footer className="flex w-full justify-between mt-6 mb-8 lg:mt-8 lg:mb-12">
      <Button project={previousProject}>Anterior</Button>
      <Button project={nextProject}>Próximo</Button>
    </footer>
  );
};
