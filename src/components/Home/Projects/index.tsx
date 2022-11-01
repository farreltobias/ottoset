import Link from 'next/link';

import { Button } from '@components/Button';
import { Title } from '@components/Texts';

import { tabs } from '@data/static/projects';

import { Tabs } from './Tabs';

export const Projects: React.FC = () => {
  return (
    <section className="flex flex-col w-full mt-16 lg:mt-36 bg-primary-600">
      <div className="bg-cover bg-no-repeat lg:bg-[url('/backgrounds/portfolio.svg')]">
        <div className="container mx-auto">
          <div className="flex justify-center lg:justify-between mt-16 lg:mt-28 mb-8">
            <Title
              variant="h2"
              className="text-neutral text-center lg:text-start lg:text-[4rem]"
            >
              Portfolio de Projetos
            </Title>
            <Button variant="outline" className="my-auto hidden lg:block">
              <Link href="/projetos">Ver todos os cases</Link>
            </Button>
          </div>
          <Tabs tabs={tabs} />
          <Button
            variant="outline"
            className="my-auto block lg:hidden mx-auto mb-14"
          >
            <Link href="/projetos">Ver todos os cases</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
