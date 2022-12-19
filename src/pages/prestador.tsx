import { useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { z } from 'zod';

import { Button } from '@components/Button';
import { Input } from '@components/Form/Input';
import { InputMask } from '@components/Form/InputMask';
import { Radio } from '@components/Form/Radio';
import { Title } from '@components/Texts';
import { Overlaid } from '@components/Texts/Overlaid';

import { SEO } from '@seo/prestador';

import { Body } from './api/provider';

import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

const Prestador: NextPage = () => {
  const formRef = useRef<FormHandles>(null);
  const [sending, setSending] = useState(false);

  const telephoneRegex = /^\(\d{2}\) (9?\d{4})-\d{4}$/;

  const required = z.string().min(1, 'Campo obrigatório');

  const schema = z.object({
    name: required,
    email: required.email('E-mail inválido'),
    telephone: required.regex(telephoneRegex, 'Telefone inválido'),
    state: required,
    city: required,
    area: required,
  });

  const defaultToasterOptions = {
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const handleSubmit: SubmitHandler<Body> = async (data) => {
    if (sending) return;

    setSending(true);
    const id = toast.loading('Enviando contato...');

    try {
      formRef.current?.setErrors({});

      await schema.parseAsync(data);

      const response = await fetch('/api/provider', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      setSending(false);

      toast.update(id, {
        ...defaultToasterOptions,
        render: 'Contato enviado com sucesso!',
        type: 'success',
        isLoading: false,
      });

      return json;
    } catch (error) {
      setSending(false);

      if (error instanceof z.ZodError) {
        toast.update(id, {
          ...defaultToasterOptions,
          render: 'Por favor, verifique os campos',
          type: 'error',
          isLoading: false,
        });

        const errors = (error as z.ZodError<z.infer<typeof schema>>).formErrors;

        Object.entries(errors.fieldErrors).forEach(([field, [message]]) => {
          formRef.current?.setFieldError(field, message);
        });
      } else {
        toast.update(id, {
          ...defaultToasterOptions,
          render: 'Ocorreu um erro ao enviar o contato',
          type: 'error',
          isLoading: false,
        });
      }
    }
  };

  const radioOptions = [
    {
      id: '1',
      label: 'Serviços voltados para grupos geradores (GMG)',
      value: 'GMG',
    },
    {
      id: '2',
      label: 'Serviços voltados para energia solar fotovoltaica (UFV)',
      value: 'UFV',
    },
  ];

  const formInputs = [
    {
      name: 'name',
      label: 'Nome completo',
      placeholder: 'Digite seu nome',
    },
    {
      name: 'email',
      label: 'Seu email',
      placeholder: 'Digite seu email',
    },
    {
      name: 'telephone',
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
      name: 'area',
      label: 'Área de atuação',
      placeholder: 'Área de atuação',
      radio: radioOptions,
    },
  ];

  return (
    <>
      <NextSeo {...SEO} />

      <ToastContainer />

      <section className="container mx-auto mt-12 mb-24 lg:mt-20 lg:mb-48">
        <Overlaid center>
          <Overlaid.Title>Seja um prestador</Overlaid.Title>
          <Overlaid.SubTitle>De serviços Ottoset</Overlaid.SubTitle>
        </Overlaid>

        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{ area: '1' }}
          className="lg:child:w-2/3 flex flex-col"
        >
          <Title
            as="h2"
            variant="h5"
            largeVariant="h3"
            className="text-center mt-4 mb-12 lg:mt-10 lg:mb-20 lg:text-left"
          >
            Trabalhe como prestador de serviços Ottoset. Atuamos em todo o
            Brasil.
          </Title>

          {formInputs.map(
            ({ mask, radio, label, name, placeholder }, index) => {
              const components = {
                mask: InputMask,
                radio: Radio,
                input: Input,
              };

              const key = mask ? 'mask' : radio ? 'radio' : 'input';
              const Component = components[key];

              return (
                <Component
                  key={name}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                  mask={mask || ''}
                  options={radio || []}
                  order={index + 1}
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

export default Prestador;
