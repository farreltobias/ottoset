import * as prismicH from '@prismicio/helpers';

import { convertTime } from '@utils/convertTime';
import { getDurationFromSlices } from '@utils/getDurationFromSlices';

import { ProjectDocument } from '.slicemachine/prismicio';

export const SEO = ({
  data: { title, description, slices },
  uid: slug,
}: ProjectDocument) => {
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
