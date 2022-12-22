import { useRef, useState } from 'react';

import { Button } from '@components/Button';
import { Dropzone } from '@components/Form/Dropzone';
import { Input } from '@components/Form/Input';
import { InputMask } from '@components/Form/InputMask';

import { handleSubmit } from './handleSubmit';
import { CareerDocument } from '.slicemachine/prismicio';

import { FormHandles } from '@unform/core';
import { Form as UnForm } from '@unform/web';

type Props = {
  career: CareerDocument;
};

export const CareerForm: React.FC<Props> = ({ career }) => {
  const formRef = useRef<FormHandles>(null);
  const [sending, setSending] = useState(false);

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
    <UnForm
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
      {formInputs.map(({ mask, label, name, placeholder, accept }, index) => {
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
    </UnForm>
  );
};
