import { useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { z } from 'zod';

import { Button } from '@components/Button';
import { Dropzone } from '@components/Form/Dropzone';
import { Input } from '@components/Form/Input';
import { InputMask } from '@components/Form/InputMask';
import { Text, Title } from '@components/Texts';

import { SEO } from '@seo/carreiras/carreira';

import { careers } from '@data/static/careers';

import { FormRequest } from '@pages/api/carrer';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

type Props = {
  career: typeof careers[0];
};

const Career: NextPage<Props> = ({ career }) => {
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
    curriculum: z
      .array(
        z.object({
          name: required,
          path: required,
        }),
      )
      .length(1, 'Envie seu currículo'),
    message: required,
  });

  const defaultToasterOptions = {
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const handleSubmit: SubmitHandler<FormRequest> = async (data) => {
    if (sending) return;

    setSending(true);
    const id = toast.loading('Enviando contato...');

    try {
      formRef.current?.setErrors({});

      await schema.parseAsync(data);

      const formData = new FormData();

      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('telephone', data.telephone);
      formData.append('state', data.state);
      formData.append('city', data.city);
      formData.append('message', data.message);
      formData.append('career', career.title);

      formData.append(
        'curriculum',
        data.curriculum[0],
        data.curriculum[0].name,
      );

      const response = await fetch('/api/carrer', {
        method: 'POST',
        body: formData,
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
      name: 'curriculum',
      label: 'Anexe seu currículo',
      accept: {
        'application/pdf': ['.pdf'],
      },
    },
    {
      name: 'message',
      label: 'Sobre você e a vaga pretendida',
      placeholder: 'Sua mensagem',
    },
  ];

  return (
    <>
      <NextSeo {...SEO(career)} />

      <ToastContainer />

      <section className="container mx-auto mt-12 mb-36 lg:mt-20 lg:mb-48">
        <Title variant="h3" largeVariant="display4" center>
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
          ref={formRef}
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
            disabled={sending}
          >
            {sending ? 'Enviando...' : 'Enviar mensagem'}
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
