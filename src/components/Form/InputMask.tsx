import React, { useEffect, useRef, useState } from 'react';
import ReactInputMask, { Props as ReactInputProps } from 'react-input-mask';

import { Text, Title } from '@components/Texts';

import { useField } from '@unform/core';

type InputProps = Omit<ReactInputProps, 'accept'>;

interface Props extends InputProps {
  name: string;
  className?: string;
  label?: string;
  order?: number;
}

export const InputMask: React.FC<Props> = ({
  name,
  className = '',
  label = name,
  order = 1,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error, clearError } =
    useField(name);

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Text
      as="label"
      variant="p2"
      largeVariant="p1"
      className={`flex items-center mb-8 lg:mb-12 border-b ${
        error && 'border-error-600'
      } ${isFocused ? 'border-info-600' : 'border-secondary-300'}
       ${className}`}
    >
      <Title
        as="span"
        variant="h6"
        className="mb-4 text-neutral-300 mr-4 lg:mr-16"
      >
        {order.toString().padStart(2, '0')}
        <span className="text-primary-600">.</span>
      </Title>
      <span className="w-full child:w-full mb-6 lg:mb-10">
        <Title
          as="span"
          variant="h4"
          largeVariant="h3"
          className="block mb-2 lg:mb-4"
        >
          {label}
        </Title>
        <ReactInputMask
          ref={inputRef}
          onFocus={() => {
            setIsFocused(true);
            clearError();
          }}
          onBlur={() => setIsFocused(false)}
          defaultValue={defaultValue}
          className={`outline-none ${className}`}
          {...rest}
        />
        {error && (
          <Text
            as="span"
            variant="p3"
            largeVariant="p2"
            className="text-error-600"
          >
            {error}
          </Text>
        )}
      </span>
    </Text>
  );
};
