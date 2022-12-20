import Link from 'next/link';

import { Button } from '@components/Button';
import { Title } from '@components/Texts';

import { ProjectsPageByCategory } from './Carousel';
import { Tabs } from './Tabs';

type Props = {
  initialData: ProjectsPageByCategory[];
};

export const Projects: React.FC<Props> = ({ initialData }) => {
  return (
    <section className="flex flex-col w-full mt-16 lg:mt-36 bg-primary-600">
      <div className="bg-cover bg-no-repeat lg:bg-[url('/backgrounds/portfolio.svg')]">
        <div className="container mx-auto">
          <div className="flex justify-center lg:justify-between mt-16 lg:mt-28 mb-8">
            <Title
              variant="h2"
              largeVariant="h1"
              className="text-neutral"
              center
            >
              Portfolio de Projetos
            </Title>
            <Link href="/projetos" legacyBehavior>
              <a aria-label="Veja todos os nossos cases">
                <Button variant="outline" className="my-auto hidden lg:block">
                  Ver todos os cases
                </Button>
              </a>
            </Link>
          </div>
          <Tabs initialData={initialData} />
          <Link href="/projetos" legacyBehavior>
            <a aria-label="Veja todos os nossos cases">
              <Button
                variant="outline"
                className="my-auto block lg:hidden mx-auto mb-14"
              >
                Ver todos os cases
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
