import { Children } from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Button } from '@components/Button';
import { Card } from '@components/Card';
import { Overlaid } from '@components/Texts/Overlaid';

import { SEO } from '@seo/projetos';

import { projects } from '@data/static/projects';

// TODO: Make infinite scroll

const Projetos: NextPage = () => {
  return (
    <>
      <NextSeo {...SEO} />

      <Overlaid className="container mx-auto mt-12 w-full text-center lg:text-left">
        <Overlaid.Title>Nossos</Overlaid.Title>
        <Overlaid.SubTitle>Projetos</Overlaid.SubTitle>
      </Overlaid>

      <section className="container mx-auto w-full mt-11 lg:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {Children.toArray(
            projects.map(({ title, description, duration, img, link }) => (
              <Card
                className="h-[40.625rem]"
                title={title}
                description={description}
                duration={duration}
                img={img}
                link={link}
              />
            )),
          )}
        </div>

        <Button
          variant="outline"
          className="justify-center font-title max-w-md w-full lg:w-fit group mt-16 md:mt-14 mb-28 mx-auto"
        >
          Carregar mais
        </Button>
      </section>
    </>
  );
};

export default Projetos;
