import * as prismicH from '@prismicio/helpers';

import { CareerDocumentData } from '.slicemachine/prismicio';

type Params = {
  slug: string;
  title: CareerDocumentData['title'];
};

export const SEO = ({ title, slug }: Params) => {
  const titleText = prismicH.asText(title);

  return {
    title: titleText,
    description: `Se candidate para a vaga de ${titleText}. Venha fazer parte da Ottoset, uma empresa que está revolucionando o mercado de energia solar no Brasil.`,
    canonical: `https://www.ottoset.com.br/projetos/${slug}`,
  };
};
