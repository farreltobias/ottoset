import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

import DoubleArrow from '@public/navigation/double-arrow-right.svg';

import worker from '@public/photos/construction-worker.png';

import { Article, Content } from '@components/Article';

export const Automation: React.FC = () => {
  return (
    <Article id="automacao" className="lg:pt-48 lg:-mt-[4.5rem]" order="right">
      <Article.Image className="shadow-[-24px_24px_0px_-1px_white,-24px_24px_#818181] lg:shadow-[36px_-34px_0_-1px_white,36px_-34px_#818181]">
        <Image
          src={worker}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
          alt="construction worker"
          placeholder="blur"
        />
      </Article.Image>

      <Article.Content className="py-12 lg:py-[6.75rem]">
        <Content.Title>Automação</Content.Title>
        <Content.Text className="text-neutral-500">
          Envolve a aplicação de tecnologias, métodos, procedimentos altamente
          especializados e ferramentas digitais para agilizar processos e
          aumentar a eficiência do negócio
        </Content.Text>
        <Content.Button className="xl:w-3/5">
          <Link href="/contato">
            <a className="flex justify-center w-full">
              Fale com o nosso time
              <DoubleArrow className="fill-primary-600 group-hover:fill-secondary-900" />
            </a>
          </Link>
        </Content.Button>
      </Article.Content>
    </Article>
  );
};
