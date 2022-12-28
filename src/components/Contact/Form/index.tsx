import { useRef, useState } from 'react';

import { Button } from '@components/Button';
import { Checkbox } from '@components/Form/Checkbox';
import { Input } from '@components/Form/Input';
import { InputMask } from '@components/Form/InputMask';

import { getInputs } from '@data/forms/contact';

import { handleSubmit } from './handleSubmit';

import type { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

export const ContactForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [sending, setSending] = useState(false);
  const [mask, setMask] = useState('(99) 99999-9999');

  return (
    <Form
      ref={formRef}
      onSubmit={(data) => handleSubmit({ data, setSending, formRef, sending })}
      initialData={{ area: '1' }}
      className="lg:w-2/3 flex flex-col"
    >
      {getInputs(mask).map(
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
  );
};
