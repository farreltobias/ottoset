import Image from 'next/image';

import DoubleArrow from '@public/navigation/double-arrow-right.svg';

import worker from '@public/photos/construction-worker.png';

import { Article, Content } from '@components/Article';

export const Automation: React.FC = () => {
  return (
    <Article id="automacao" className="pt-32 -mt-20 lg:pt-48 lg:-mt-[4.5rem]">
      <Article.Image className="shadow-[24px_-24px_0px_-1px_white,24px_-24px_#818181] lg:shadow-[36px_-34px_0_-1px_white,36px_-34px_#818181]">
        <Image
          src={worker}
          alt="construction worker"
          placeholder="blur"
          className="w-full h-auto object-cover object-center"
          sizes="100vw"
        />
      </Article.Image>

      <Article.Content className="pb-12 lg:py-[6.75rem]">
        <Content.Title>Automação</Content.Title>
        <Content.Text>
          Envolve a aplicação de tecnologias, métodos, procedimentos altamente
          especializados e ferramentas digitais para agilizar processos e
          aumentar a eficiência do negócio
        </Content.Text>
        <Content.Link href="/contato" text="Fale com o nosso time">
          Fale com o nosso time
          <DoubleArrow className="transition-all fill-primary-600 group-hover:fill-secondary-900" />
        </Content.Link>
      </Article.Content>
    </Article>
  );
};
