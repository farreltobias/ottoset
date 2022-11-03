type Params = {
  id: string;
  title: string;
  slug: string;
};

export const SEO = ({ title, slug }: Params) => {
  return {
    title: `${title} - Ottoset Energy`,
    description: `Se candidate para a vaga de ${title}. Venha fazer parte da Ottoset, uma empresa que está revolucionando o mercado de energia solar no Brasil.`,
    canonical: `https://www.ottoset.com.br/projetos/${slug}`,
  };
};
