import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { NextPage } from 'next';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import { z } from 'zod';

import office from '@public/photos/office-alt.png';

import { Button } from '@components/Button';
import { Checkbox } from '@components/Form/Checkbox';
import { Input } from '@components/Form/Input';
import { InputMask } from '@components/Form/InputMask';
import { Text, Title } from '@components/Texts';

import { SEO } from '@seo/contato';

import { Body } from './api/contact';

import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

const Prestador: NextPage = () => {
  const formRef = useRef<FormHandles>(null);

  const [mask, setMask] = useState('(99) 99999-9999');
  const [sending, setSending] = useState(false);

  const telephoneRegex = /^\(\d{2}\) (9?\d{4})-\d{4}$/;

  const required = z.string().min(1, 'Campo obrigatório');

  const schema = z.object({
    name: required,
    telephone: required.regex(telephoneRegex, 'Telefone inválido'),
    service: required,
    message: required,
    privacy: z
      .boolean()
      .refine(
        (value) => value === true,
        'Você precisa aceitar os termos de privacidade',
      ),
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

      const response = await fetch('/api/contact', {
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

  const formInputs = [
    {
      name: 'name',
      label: 'Nome completo',
      placeholder: 'Digite seu nome',
    },
    {
      name: 'telephone',
      label: 'Telefone',
      placeholder: 'Digite seu telefone fixo ou celular',
      mask,
    },
    {
      name: 'service',
      label: 'Quais serviços você está buscando?',
      placeholder: 'Grupo geradores, Energia solar, Manutenção predial...',
    },
    {
      name: 'message',
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
        <Title as="h1" variant="h3" largeVariant="display2" center>
          Vamos iniciar um projeto juntos
        </Title>

        <Text
          variant="p2"
          largeVariant="p1"
          center
          className="text-neutral-900 mt-6 lg:mt-8 mb-12 lg:mb-20"
        >
          Preencha o formulário abaixo para contato e orçamentos
        </Text>

        <div className="relative flex flex-col lg:flex-row">
          <Form
            ref={formRef}
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
                    autoFocus={!index}
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
              disabled={sending}
            >
              {sending ? 'Enviando...' : 'Enviar mensagem'}
            </Button>
          </Form>

          <div className="relative my-32 lg:mt-0 lg:ml-36 lg:w-1/3">
            <div className="w-full shadow-[-32px_32px_0px_-1px_white,-32px_32px_#818181] lg:shadow-[-32px_36px_0px_-1px_white,-32px_36px_#818181]">
              <Image
                src={office}
                alt="office"
                placeholder="blur"
                className="w-full h-auto object-cover"
                sizes="100vw"
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
