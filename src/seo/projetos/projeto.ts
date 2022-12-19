import * as prismicH from '@prismicio/helpers';

import { Project } from '@utils/convertProject';
import { convertTime } from '@utils/convertTime';
import { getDurationFromSlices } from '@utils/getDurationFromSlices';

export const SEO = ({ title, description, slug, slices }: Project) => {
  const duration = getDurationFromSlices(slices);

  return {
    title: `${prismicH.asText(title)} - Ottoset Energy`,
    description: `${prismicH.asText(
      description,
    )}. Veja mais sobre o projeto ${prismicH.asText(
      title,
    )} da Ottoset Energy - ${convertTime(duration)}`,
    canonical: `https://www.ottoset.com.br/projetos/${slug || ''}`,
  };
};
