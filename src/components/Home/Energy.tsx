import Badge from '@public/company/badge.svg';
import DoubleArrow from '@public/navigation/double-arrow-right.svg';

import street from '@public/photos/street.png';

import { Article, Content } from '@components/Article';
import { BlurImage } from '@components/BlurImage';

export const Energy: React.FC = () => {
  return (
    <Article as="div" className="lg:pt-0 lg:mt-36">
      <Article.Content className="lg:order-last py-12 lg:py-[6.75rem]">
        <Content.Title>Energia é o que nos move!</Content.Title>
        <Content.SubTitle className="order-first">
          20 anos de experiência
        </Content.SubTitle>
        <Content.Text>
          A Ottoset surgiu da carência do mercado por uma empresa que oferecesse
          qualidade com um preço justo, aos poucos a Ottoset foi se
          estruturando, aumentando a quantidade de geradores, investindo nos
          melhores profissionais e produzindo todo o material necessário para se
          tornar uma das empresas de maior credibilidade em relação a energia do
          pais.
          <br />
          <br />
          Uma equipe de profissionais qualificados, treinados periodicamente
          além de modernos equipamentos, nos habilitam a prestar serviços com
          qualidade, seriedade e pontualidade.
        </Content.Text>
        <Content.Link href="/contato" text="Seja um cliente Ottoset">
          Seja um cliente Ottoset
          <DoubleArrow className="transition-all fill-primary-600 group-hover:fill-secondary-900" />
        </Content.Link>
      </Article.Content>
      <Article.Image className="shadow-[-24px_24px_0px_-1px_white,-24px_24px_#818181] lg:shadow-[-45px_56px_0px_-1px_white,-45px_56px_#818181]">
        <BlurImage
          src={street}
          alt="street with lights"
          className="w-full h-auto"
        />
        <Badge className="absolute bottom-8 left-8 w-1/4 h-1/4" />
      </Article.Image>
    </Article>
  );
};
