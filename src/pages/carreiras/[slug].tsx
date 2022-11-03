import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { Button } from '@components/Button';
import { Dropzone } from '@components/Form/Dropzone';
import { Input } from '@components/Form/Input';
import { InputMask } from '@components/Form/InputMask';
import { Text, Title } from '@components/Texts';

import { SEO } from '@seo/carreiras/carreira';

import { careers } from '@data/static/careers';

import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

type Props = {
  career: typeof careers[0];
};

const Career: NextPage<Props> = ({ career }) => {
  const handleSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  const formInputs = [
    {
      name: 'nome',
      label: 'Nome completo',
      placeholder: 'Digite seu nome',
    },
    {
      name: 'email',
      label: 'Seu email',
      placeholder: 'Digite seu email',
    },
    {
      name: 'phone',
      label: 'Celular (Whatsapp)',
      placeholder: 'Digite seu telefone',
      mask: '(99) 99999-9999',
    },
    {
      name: 'state',
      label: 'Estado',
      placeholder: 'Estado',
    },
    {
      name: 'city',
      label: 'Cidade',
      placeholder: 'Nome da cidade',
    },
    {
      name: 'curriculum',
      label: 'Anexe seu currículo',
      accept: {
        'application/pdf': ['.pdf'],
      },
    },
    {
      name: 'about',
      label: 'Sobre você e a vaga pretendida',
      placeholder: 'Sua mensagem',
    },
  ];

  return (
    <>
      <NextSeo {...SEO(career)} />

      <section className="container mx-auto mt-12 mb-36 lg:mt-20 lg:mb-48">
        <Title
          variant="h3"
          className="text-center lg:text-left lg:text-7xl lg:leading-120 lg:font-extrabold"
        >
          {career.title}
        </Title>

        <Text
          as="div"
          variant="p2"
          className="flex flex-col lg:flex-row justify-between text-neutral-500 mt-8 mb-12 lg:mt-12 lg:mb-20 lg:child:max-w-[50%]"
        >
          <div className="mb-10 lg:mb-0">
            <b>Requisitos:</b>
            <ul>
              {career.requirements.map((requirement) => (
                <li key={requirement}>- {requirement}</li>
              ))}
            </ul>
          </div>
          <div>
            <b>Desejável:</b>
            <ul>
              {career.desirable.map((requirement) => (
                <li key={requirement}>- {requirement}</li>
              ))}
            </ul>
          </div>
        </Text>

        <Form
          onSubmit={handleSubmit}
          initialData={{ area: '1' }}
          className="lg:child:w-2/3 flex flex-col"
        >
          {formInputs.map(
            ({ mask, label, name, placeholder, accept }, index) => {
              const components = {
                mask: InputMask,
                input: Input,
                dropzone: Dropzone,
              };

              const key = mask ? 'mask' : accept ? 'dropzone' : 'input';
              const Component = components[key];

              return (
                <Component
                  key={name}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                  mask={mask || ''}
                  order={index + 1}
                  accept={accept}
                />
              );
            },
          )}

          <Button
            type="submit"
            className="not-child w-full lg:w-1/4 justify-center self-center mt-10 lg:mt-16"
          >
            Enviar
          </Button>
        </Form>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { slug } = ctx.params || {};
  const career = careers.find(({ slug: careerSlug }) => careerSlug === slug);

  if (!slug || !career) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      career,
    },
  };
};

export default Career;
