import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Item } from '@components/careers/Item';
import { Overlaid } from '@components/Texts/Overlaid';

import { SEO } from '@seo/carreiras';

import { careers } from '@data/static/careers';

const Careers: NextPage = () => {
  return (
    <>
      <NextSeo {...SEO} />

      <section className="container mx-auto mt-12 mb-48 lg:mt-[4.5rem]">
        <Overlaid center>
          <Overlaid.Title>Carreiras</Overlaid.Title>
          <Overlaid.SubTitle>na Ottoset</Overlaid.SubTitle>
        </Overlaid>

        <ul className="mt-11">
          {careers.map(({ title, slug }) => (
            <Item key={slug} title={title} link={`/carreiras/${slug}`} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Careers;
