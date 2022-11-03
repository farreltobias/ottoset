import { useEffect, useRef } from 'react';

import { Text, Title } from '@components/Texts';

import { useField } from '@unform/core';

type InputProps = Omit<
  JSX.IntrinsicElements['input'],
  'ref' | 'defaultValue' | 'className'
>;

type Option = {
  id: string;
  value: string;
  label: string;
};

type Props = {
  name: string;
  className?: string;
  label?: string;
  order?: number;
  options: Option[];
} & InputProps;

export const Radio: React.FC<Props> = ({
  name,
  label,
  options,
  order = 1,
  className = '',
  ...rest
}) => {
  const inputRefs = useRef<HTMLInputElement[] | null[]>([]);
  const { fieldName, registerField, defaultValue = '' } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs,
      getValue: (refs: React.MutableRefObject<HTMLInputElement[]>) => {
        return refs.current.find((input) => input?.checked)?.value;
      },
      setValue: (refs: React.MutableRefObject<HTMLInputElement[]>, id) => {
        const inputRef = refs.current.find((ref) => ref.id === id);
        if (inputRef) inputRef.checked = true;
      },
      clearValue: (refs: React.MutableRefObject<HTMLInputElement[]>) => {
        const inputRef = refs.current.find((ref) => ref.checked === true);
        if (inputRef) inputRef.checked = false;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Text as="span" className="flex items-center">
      <Title
        as="span"
        variant="h6"
        className="hidden lg:block text-neutral-300 mb-4 mr-16"
      >
        {order.toString().padStart(2, '0')}
        <span className="text-primary-600">.</span>
      </Title>
      <span className="w-full child:w-full">
        <Title
          as="span"
          variant="h4"
          className="flex items-center mb-6 lg:text-[2rem] lg:leading-125"
        >
          <Title
            as="span"
            variant="h6"
            className="block lg:hidden text-neutral-300 mr-4"
          >
            {order.toString().padStart(2, '0')}
            <span className="text-primary-600">.</span>
          </Title>
          {label}
        </Title>
        {options.map((option, index) => {
          return (
            <label
              htmlFor={option.id}
              key={option.id}
              className="flex items-center text-base hover:cursor-pointer mb-6 last:m-0"
            >
              <input
                type="radio"
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                id={option.id}
                name={name}
                defaultChecked={defaultValue.includes(option.id)}
                value={option.value}
                className={`peer appearance-none ${className}`}
                {...rest}
              />
              <span className="relative flex items-center justify-center w-fit peer-checked:children:border-primary-500 peer-checked:child:h-3/5 peer-checked:child:w-3/5 transition-all mr-3">
                <span className="h-6 w-6 not-child border-2 rounded-full border-secondary-300" />
                <span className="absolute block not-children bg-primary-500 w-0 h-0 rounded-full transition-all" />
              </span>
              {option.label}
            </label>
          );
        })}
      </span>
    </Text>
  );
};
