import Image from 'next/image';
import Link from 'next/link';

import brasil from '@public/photos/brasil.png';

import { Button } from '@components/Button';
import { Text } from '@components/Texts';

export const Reach: React.FC = () => {
  return (
    <div className="mt-28 lg:mt-[12.5rem] bg-gradient-to-r from-primary-300 to-primary-500">
      <div className="bg-[url('/backgrounds/service.svg')] bg-cover bg-no-repeat bg-center">
        <div className="container mx-auto flex flex-col lg:flex-row w-full py-14 lg:py-0">
          <div className="flex flex-col justify-center text-neutral mb-12 lg:w-1/2 lg:mt-36 lg:mb-[17.125rem]">
            <h2 className="mb-4 lg:mb-6 text-neutral-50 leading-120 font-extrabold text-[2.5rem] lg:text-[4.75rem]">
              Atendemos o Brasil inteiro
            </h2>
            <Text className="mb-8 lg:mb-10">
              Somos a Ottoset Energy, uma empresa de soluções ágeis e
              confiáveis, presente em todo o Brasil.
            </Text>

            <Link href="/contato" aria-label="Fale com nossa equipe">
              <Button className="font-title w-fit">
                Fale com nossa equipe
              </Button>
            </Link>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full">
              <Image
                src={brasil}
                alt="Brasil's map"
                placeholder="blur"
                className="w-full h-auto"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
