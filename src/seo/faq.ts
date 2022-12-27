type Params = {
  question: string;
};

export const SEO = ({ question }: Params) => {
  return {
    title: `Perguntas frequentes`,
    description: `${question} Veja a resposta dessa e de outras perguntas frequentes sobre a Ottoset Energy.`,
    canonical: `https://www.ottoset.com.br/faq`,
  };
};
