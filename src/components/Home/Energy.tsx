import Image from 'next/image';
import Link from 'next/link';

import DoubleArrow from '@public/navigation/double-arrow-right.svg';
import Badge from '@public/logo/badge.svg';

import street from '@public/photos/street.png';

import { Text, Title } from '@components/Texts';
import { Button } from '@components/Button';

export const Energy: React.FC = () => (
  <section className="mt-36 container mx-auto flex w-full justify-evenly">
    <div className="flex items-center justify-center w-1/2">
      <div className="relative w-full shadow-[-45px_56px_0px_-1px_white,-45px_56px_#818181]">
        <Image
          src={street}
          layout="responsive"
          alt="street with lights"
          placeholder="blur"
        />
        <Badge className="absolute bottom-8 left-8" />
      </div>
    </div>
    <div className="w-1/2 flex justify-center flex-col pl-20 py-[6.75rem]">
      <Title as="h2" variant="h6" className="mb-2">
        20 anos de experiência
      </Title>
      <Title variant="h2" className="mb-4">
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

      <Button variant="outline" className="font-title w-fit group">
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
