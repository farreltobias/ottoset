import { useEffect, useRef } from 'react';

import { Text } from '@components/Texts';

import { useField } from '@unform/core';

type InputProps = Omit<
  JSX.IntrinsicElements['input'],
  'ref' | 'defaultValue' | 'className' | 'accept'
>;

type Props = {
  name: string;
  className?: string;
  label: string;
} & InputProps;

export const Checkbox: React.FC<Props> = ({
  name,
  value,
  className,
  label,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  const defaultChecked = defaultValue === value;

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.checked;
      },
      clearValue: (ref) => {
        ref.current.checked = defaultChecked;
      },
      setValue: (ref, value) => {
        ref.current.checked = value;
      },
    });
  }, [defaultValue, fieldName, registerField, defaultChecked]);

  return (
    <Text
      as="label"
      variant="p2"
      className="flex items-center text-base hover:cursor-pointer mb-6 last:m-0"
    >
      <input
        type="checkbox"
        ref={inputRef}
        id={fieldName}
        defaultChecked={defaultChecked}
        className={`peer appearance-none ${className}`}
        {...rest}
      />
      <span className="relative flex items-center justify-center w-fit transition-all mr-3 peer-checked:child:h-full peer-checked:child:w-full peer-checked:children:w-[10px] peer-checked:children:h-[17px]">
        <span className="not-child not-children h-6 w-6 border-2 border-secondary-300" />
        <span className="absolute not-children block bg-primary-500 w-0 h-0 transition-all" />
        <span className="not-child absolute bottom-1/4 h-0 w-0 rotate-45 border-neutral border-b-[3.5px] border-r-[3.5px] transition-all" />
      </span>
      {label}
    </Text>
  );
};
