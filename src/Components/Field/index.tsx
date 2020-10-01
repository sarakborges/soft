// Dependencies
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// Styles
import { FieldWrapper, Label, FieldStyle } from './style';

// Component Field
const Field = ({
  placeholder,
  value,
  type,
  label,
  name,
  onChange,
}: {
  placeholder?: string;
  value?: string;
  type?: string;
  label?: IconProp;
  name?: string;
  options?: Array<{
    label: string;
    value: string;
  }>;
  onChange?: any; // TODO encontrar tipagem que não dê erro
}) => {
  return (
    <FieldWrapper>
      {!!label && !!name && (
        <Label htmlFor={name}>
          <FontAwesomeIcon icon={label} />
        </Label>
      )}

      {type !== 'select' && type !== 'textarea' && (
        <FieldStyle
          id={name}
          type={type || 'text'}
          placeholder={placeholder || 'Digite aqui'}
          value={value}
          onChange={onChange}
        />
      )}
    </FieldWrapper>
  );
};

export default Field;
