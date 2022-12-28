import { useRef, useState } from 'react';

import { Button } from '@components/Button';
import { Input } from '@components/Form/Input';
import { InputMask } from '@components/Form/InputMask';
import { Radio } from '@components/Form/Radio';

import { inputs } from '@data/forms/provider';

import { handleSubmit } from './handleSubmit';

import type { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

export const ProviderFrom: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [sending, setSending] = useState(false);

  return (
    <Form
      ref={formRef}
      onSubmit={(data) => handleSubmit({ data, setSending, formRef, sending })}
      initialData={{ area: '1' }}
      className="lg:child:w-2/3 flex flex-col"
    >
      {inputs.map(({ mask, radio, label, name, placeholder }, index) => {
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
      })}

      <Button
        type="submit"
        className="not-child w-full lg:w-1/4 justify-center self-center mt-10 lg:mt-16"
      >
        Enviar
      </Button>
    </Form>
  );
};
