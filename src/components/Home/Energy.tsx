import Image from 'next/image';
import Link from 'next/link';

import DoubleArrow from '@public/navigation/double-arrow-right.svg';
import Badge from '@public/logo/badge.svg';

import street from '@public/photos/street.png';

import { Text, Title } from '@components/Texts';
import { Button } from '@components/Button';

export const Energy: React.FC = () => (
  <section className="lg:mt-36 container mx-auto flex flex-col-reverse lg:flex-row w-full justify-evenly">
    <div className="flex items-center justify-center lg:w-1/2">
      <div className="relative w-full shadow-[-24px_24px_0px_-1px_white,-24px_24px_#818181] lg:shadow-[-45px_56px_0px_-1px_white,-45px_56px_#818181]">
        <Image
          src={street}
          layout="responsive"
          alt="street with lights"
          placeholder="blur"
        />
        <Badge className="absolute bottom-8 left-8 w-1/4 h-1/4" />
      </div>
    </div>
    <div className="flex flex-col justify-center items-center text-center py-12 lg:text-start lg:items-start lg:w-1/2 lg:pl-20 lg:py-[6.75rem]">
      <Title as="h2" variant="h6" className="mb-2">
        20 anos de experiência
      </Title>
      <Title variant="h3" className="mb-4 lg:text-5xl lg:leading-120">
        Energia é o que nos move!
      </Title>
      <Text variant="p2" className="mb-10">
        A Ottoset surgiu da carência do mercado por uma empresa que oferecesse
        qualidade com um preço justo, aos poucos a Ottoset foi se estruturando,
        aumentando a quantidade de geradores, investindo nos melhores
        profissionais e produzindo todo o material necessário para se tornar uma
        das empresas de maior credibilidade em relação a energia do pais.
        <br />
        <br />
        Uma equipe de profissionais qualificados, treinados periodicamente além
        de modernos equipamentos, nos habilitam a prestar serviços com
        qualidade, seriedade e pontualidade.
      </Text>

      <Button
        variant="outline"
        className="justify-center lg:justify-start font-title max-w-md w-full lg:w-fit group"
      >
        <Link href="/contact">
          <a className="flex">
            Seja um cliente Ottoset
            <DoubleArrow className="fill-primary-600 group-hover:fill-secondary-900" />
          </a>
        </Link>
      </Button>
    </div>
  </section>
);
