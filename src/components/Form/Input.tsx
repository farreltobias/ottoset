import React, { useEffect, useRef } from 'react';

import { Text, Title } from '@components/Texts';

import { useField } from '@unform/core';

type InputProps = Omit<
  JSX.IntrinsicElements['input'],
  'ref' | 'defaultValue' | 'className' | 'accept'
>;

type Props = {
  name: string;
  className?: string;
  label?: string;
  order?: number;
} & InputProps;

export const Input: React.FC<Props> = ({
  name,
  className = '',
  label = name,
  order = 1,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <Text
      as="label"
      variant="p2"
      largeVariant="p1"
      className="flex items-center mb-8 lg:mb-12 border-b border-secondary-300"
    >
      <Title
        as="span"
        variant="h6"
        className="mb-4 text-neutral-300 mr-4 lg:mr-16"
      >
        {order.toString().padStart(2, '0')}
        <span className="text-primary-600">.</span>
      </Title>
      <span className="w-full child:w-full">
        <Title
          as="span"
          variant="h4"
          largeVariant="h3"
          className="block mb-2 lg:mb-4"
        >
          {label}
        </Title>
        <input
          ref={inputRef}
          defaultValue={defaultValue}
          className={`outline-none mb-6 lg:mb-10 ${className}`}
          {...rest}
        />
      </span>
    </Text>
  );
};
