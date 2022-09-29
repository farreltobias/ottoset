import Image from 'next/image';

import brasil from '@public/photos/brasil.png';
import { Text, Title } from '@components/Texts';
import { Button } from '@components/Button';
import Link from 'next/link';

export const Service: React.FC = () => {
  return (
    <section className="mt-[12.5rem] bg-gradient-to-r from-primary-300 to-primary-500">
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url("backgrounds/service.svg")',
        }}
      >
        <div className="container mx-auto flex w-full">
          <div className="w-1/2 mt-36 mb-[17.125rem] flex flex-col justify-center text-neutral">
            <Title variant="display3" className="mb-6 text-neutral-50">
              Atendemos o Brasil inteiro
            </Title>
            <Text className="mb-10">
              Somos a Ottoset Energy, uma empresa de soluções ágeis e
              confiáveis, presente em todo o Brasil.
            </Text>

            <Button className="font-title w-fit">
              <Link href="/contact">Fale com nossa equipe</Link>
            </Button>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <div className="relative w-full">
              <Image
                src={brasil}
                layout="responsive"
                alt="Brasil's map"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
