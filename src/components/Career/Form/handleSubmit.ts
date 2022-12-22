import type { RefObject } from 'react';

import type { z as zod } from 'zod';

import type { CareerDocumentData } from '.slicemachine/prismicio';

import type { FormRequest } from '@pages/api/carrer';
import type { FormHandles } from '@unform/core';

const defaultToasterOptions = {
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

type Props = {
  data: { title: CareerDocumentData['title'] } & FormRequest;
  sending: boolean;
  setSending: (sending: boolean) => void;
  formRef: RefObject<FormHandles>;
};

export const handleSubmit = async ({
  data,
  formRef,
  sending,
  setSending,
}: Props) => {
  if (sending) return;

  const { z } = await import('zod');
  const { toast } = await import('react-toastify');
  const { asText } = await import('@prismicio/helpers');

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
    formData.append('career', asText(data.title));

    formData.append('curriculum', data.curriculum[0], data.curriculum[0].name);

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

      const errors = (error as zod.ZodError<zod.infer<typeof schema>>)
        .formErrors;

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
