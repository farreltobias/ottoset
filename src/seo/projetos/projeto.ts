import { convertTime } from '@utils/convertTime';

type Params = {
  id: string;
  title: string;
  description: string;
  duration: number;
};

export const SEO = ({ id, title, description, duration }: Params) => {
  return {
    title: `${title} - Ottoset Energy`,
    description: `${description}. Veja mais sobre o projeto ${title} da Ottoset Energy - ${convertTime(
      duration,
    )}`,
    canonical: `https://www.ottoset.com.br/projetos/${id}`,
  };
};
