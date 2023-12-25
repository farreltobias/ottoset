import { useRef, useState } from 'react';

import { Content } from '@prismicio/client';

import { Button } from '@components/Button';
import { Dropzone } from '@components/Form/Dropzone';
import { Input } from '@components/Form/Input';
import { InputMask } from '@components/Form/InputMask';

import { inputs } from '@data/forms/career';

import { handleSubmit } from './handleSubmit';

import type { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

type Props = {
  career: Content.CareerDocument;
};

export const CareerForm: React.FC<Props> = ({ career }) => {
  const formRef = useRef<FormHandles>(null);
  const [sending, setSending] = useState(false);

  return (
    <Form
      ref={formRef}
      onSubmit={(data) =>
        handleSubmit({
          data: { title: career.data.title, ...data },
          setSending,
          formRef,
          sending,
        })
      }
      initialData={{ area: '1' }}
      className="lg:child:w-2/3 flex flex-col"
    >
      {inputs.map(({ mask, label, name, placeholder, accept }, index) => {
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
      })}

      <Button
        type="submit"
        className="not-child w-full lg:w-1/4 justify-center self-center mt-10 lg:mt-16"
        disabled={sending}
      >
        {sending ? 'Enviando...' : 'Enviar mensagem'}
      </Button>
    </Form>
  );
};
