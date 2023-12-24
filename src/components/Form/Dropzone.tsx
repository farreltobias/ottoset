import React, { useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { Button } from '@components/Button';
import { Text, Title } from '@components/Texts';

import { useField } from '@unform/core';

interface Props {
  name: string;
  accept?: {
    [key: string]: string[];
  };
  maxFiles?: number;
  label?: string;
}

interface InputRefProps extends HTMLInputElement {
  acceptedFiles: File[];
}

export const Dropzone: React.FC<Props> = ({
  name,
  accept = {
    'image/*': [],
  },
  maxFiles = 1,
  label = name,
}) => {
  const inputRef = useRef<InputRefProps>(null);
  const {
    fieldName,
    registerField,
    defaultValue = [],
    error,
    clearError,
  } = useField(name);

  const [acceptedFiles, setAcceptedFiles] = useState<File[]>(defaultValue);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles,
    accept,
    onDrop: (onDropAcceptedFiles) => {
      if (inputRef.current) {
        inputRef.current.acceptedFiles = onDropAcceptedFiles;
        setAcceptedFiles(onDropAcceptedFiles);
        clearError();
      }
    },
  });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: InputRefProps) => {
        return ref.acceptedFiles || [];
      },
      clearValue: (ref: InputRefProps) => {
        ref.acceptedFiles = [];
        setAcceptedFiles([]);
      },
      setValue: (ref: InputRefProps, value) => {
        ref.acceptedFiles = value;
        setAcceptedFiles(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <div
      {...getRootProps()}
      onClick={() => inputRef.current?.click()}
      className="mb-10 lg:mb-14"
    >
      <input {...getInputProps()} id={name} ref={inputRef} />

      <label htmlFor={name} className="block mb-4 lg:mb-4">
        <Title
          className="w-full block"
          as="span"
          variant="h4"
          largeVariant="h3"
          center
        >
          {label}
        </Title>
      </label>

      <div className="flex flex-col lg:flex-row w-full items-center">
        <Button
          type="button"
          variant="outline"
          className="w-full lg:w-2/5 justify-center lg:mr-8 mb-3 lg:mb-0"
        >
          {isDragActive ? 'Solte o arquivo aqui' : 'Escolher arquivo'}
        </Button>

        <Text
          variant="p2"
          largeVariant="p1"
          as="span"
          className="text-neutral-400"
          center
        >
          {!acceptedFiles.length
            ? 'Nenhum arquivo selecionado'
            : acceptedFiles[0].name.length > 30
            ? `${acceptedFiles[0].name.slice(0, 30)}...`
            : acceptedFiles[0].name}
        </Text>
      </div>
      {error && (
        <Text
          as="span"
          variant="p3"
          largeVariant="p2"
          className="block text-error-600 mt-2"
          center
        >
          {error}
        </Text>
      )}
    </div>
  );
};
