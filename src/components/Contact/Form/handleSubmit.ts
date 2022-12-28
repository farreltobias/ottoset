import type { Dispatch, RefObject, SetStateAction } from 'react';

import type { z as zod } from 'zod';

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
  data: FormRequest;
  sending: boolean;
  setSending: Dispatch<SetStateAction<boolean>>;
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
