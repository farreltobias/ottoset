import { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import office from '@public/photos/office-alt.png';

import { Button } from '@components/Button';
import { Checkbox } from '@components/From/Checkbox';
import { Input } from '@components/From/Input';
import { InputMask } from '@components/From/InputMask';
import { Text, Title } from '@components/Texts';

import { SEO } from '@seo/contato';

import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

const Prestador: NextPage = () => {
  const [mask, setMask] = useState('(99) 99999-9999');

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
      name: 'phone',
      label: 'Telefone',
      placeholder: 'Digite seu telefone fixo ou celular',
      mask,
    },
    {
      name: 'services',
      label: 'Quais serviços você está buscando?',
      placeholder: 'Grupo geradores, Energia solar, Manutenção predial...',
    },
    {
      name: 'city',
      label: 'Sua mensagem',
      placeholder: 'Olá,',
    },
    {
      name: 'privacy',
      value: 'privacy',
      label: 'Li e concordo com a Política de privacidade',
      checkbox: true,
    },
  ];

  return (
    <>
      <NextSeo {...SEO} />

      <section className="container mx-auto mt-12 lg:mt-20 lg:mb-48">
        <Title
          as="h1"
          variant="h3"
          className="text-center lg:text-left lg:text-8xl lg:leading-120 lg:font-extrabold"
        >
          Vamos iniciar um projeto juntos
        </Title>

        <Text
          variant="p2"
          className="text-center lg:text-left text-neutral-900 mt-6 lg:text-2xl lg:mt-8 mb-12 lg:mb-20"
        >
          Preencha o formulário abaixo para contato e orçamentos
        </Text>

        <div className="relative flex flex-col lg:flex-row">
          <Form
            onSubmit={handleSubmit}
            initialData={{ area: '1' }}
            className="lg:w-2/3 flex flex-col"
          >
            {formInputs.map(
              ({ mask, label, name, placeholder, checkbox, value }, index) => {
                const components = {
                  mask: InputMask,
                  checkbox: Checkbox,
                  input: Input,
                };

                const key = mask ? 'mask' : checkbox ? 'checkbox' : 'input';
                const Component = components[key];

                if (key === 'mask') {
                  Component.defaultProps = {
                    mask,
                    onChange: (e) => {
                      setMask(
                        e.target.value.replace(/[^\d]/g, '')[2] === '9'
                          ? '(99) 99999-9999'
                          : '(99) 9999-9999',
                      );
                    },
                  };
                }

                return (
                  <Component
                    key={name}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    mask={mask || ''}
                    order={index + 1}
                    value={value}
                  />
                );
              },
            )}

            <Button
              type="submit"
              className="lg:absolute lg:bottom-0 lg:left-1/2 lg:translate-y-full lg:-translate-x-1/2 w-full lg:w-1/4 justify-center self-center mt-10 lg:mt-16"
            >
              Enviar mensagem
            </Button>
          </Form>

          <div className="relative my-32 lg:mt-0 lg:ml-36 lg:w-1/3">
            <div className="relative w-full shadow-[-32px_32px_0px_-1px_white,-32px_32px_#818181] lg:shadow-[-32px_36px_0px_-1px_white,-32px_36px_#818181]">
              <Image
                src={office}
                layout="responsive"
                objectFit="cover"
                alt="office"
                placeholder="blur"
              />
            </div>
            <span className="block absolute w-20 h-20 top-0 right-0 -translate-x-1/2 -translate-y-1/2 lg:translate-x-1/2">
              <span className="relative flex justify-center items-center w-full h-full bg-[url('/photos/contact.png')] bg-[length:200%] bg-[position:50%_25%] rounded-full">
                <span className="block absolute border border-secondary-900 rounded-full w-[calc(100%+5rem)] h-[calc(100%+5rem)]" />
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prestador;
