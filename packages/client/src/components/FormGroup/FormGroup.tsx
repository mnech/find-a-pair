import { Form } from 'react-bootstrap';
import React from 'react';

export type TFormGroup = {
  defaultValue?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  label: string;
  errorText?: string;
  isInvalid?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const FormGroup = (props: TFormGroup) => {
  const {
    defaultValue,
    name,
    placeholder,
    label,
    errorText,
    onChange,
    isInvalid = false,
    required = false,
    type = 'text',
  } = props;

  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        required={required}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        isInvalid={isInvalid}
        onChange={onChange}
      />
      {errorText && (
        <Form.Control.Feedback type="invalid">
          {errorText}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default FormGroup;
