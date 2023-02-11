import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import UsersController from '../../../../controllers/UsersController';
import { Password } from '../../../../models/User';
import { regexpTest } from '../../../../utils/validate';
import { FormGroup } from '../../../../components/FormGroup';
import './EditPasswordForm.scss';

export interface EditPasswordFormProps {
  setIsEditPassword: (state: boolean) => void,
}

type TPasswordFields = {
  oldPassword: string;
  newPassword: string;
  repeatNewPassword: string
}

type TFormGroups = {
  [key in keyof TPasswordFields]: {
    label: string;
    placeholder: string;
    errorText: string;
    required: boolean;
    type?: string
  };
};

const FormGroups: TFormGroups = {
  oldPassword: {
    label: 'Old password',
    placeholder: 'Enter old password',
    errorText: 'Please provide a valid old password',
    required: true,
    type: 'password',
  },
  newPassword: {
    label: 'New password',
    placeholder: 'Enter new password',
    required: true,
    errorText: 'Please provide a valid new password',
    type: 'password',
  },
  repeatNewPassword: {
    label: 'Repeat new password',
    placeholder: 'Repeat new password',
    required: true,
    errorText: 'Password mismatch',
    type: 'password',
  },
} as const;

const getValidateInit = () => {
  return Object.keys(FormGroups).reduce((acc, key) => {
    acc[key as keyof TFormGroups] = false;
    return acc;
  }, {} as Record<keyof TFormGroups, boolean>);
};

const getValuesInit = () => {
  return Object.keys(FormGroups).reduce((acc, key) => {
    acc[key as keyof TFormGroups] = null;
    return acc;
  }, {} as Record<keyof TFormGroups, string | null>);
};

const EditPasswordForm = ({ setIsEditPassword }: EditPasswordFormProps) => {
  const [validated, setValidated] = useState(getValidateInit());
  const [values, setValues] = useState(getValuesInit());

  const handleSubmit = async (event: React.FormEvent) => {
    event.stopPropagation();
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    if (!Object.values(validated).every(item => item)) return;

    const data = Object.fromEntries(new FormData(form));
    await UsersController.updatePassword(data as unknown as Password);

    setIsEditPassword(false);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setValidated(
      {
        ...validated,
        [name]: regexpTest('password', value),
      });
    setValues({ ...values, [name]: value });
  };

  const onChangeRepeatPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setValues({ ...values, [name]: value });
    setValidated(
      {
        ...validated,
        [name]: values.newPassword === values.repeatNewPassword && !!values.newPassword,
      });
  };

  const isValid = (name: keyof TFormGroups) => {
    return Boolean(validated[name] && values[name]);
  };

  return <Form className="form-edit-password" noValidate onSubmit={handleSubmit}>
    {Object.entries(FormGroups).map(([name, value]) => {
      const { label, placeholder, errorText, required, type } = value;
      return (<FormGroup
        key={name}
        type={type}
        label={label}
        name={name}
        placeholder={placeholder}
        required={required}
        errorText={errorText}
        isValid={isValid(name as keyof TFormGroups)}
        isInvalid={!isValid(name as keyof TFormGroups)}
        onChange={name !== 'repeatNewPassword' ? onChange : onChangeRepeatPassword}
      />);
    })}
    <Button variant="primary" type="submit" className="button">
      Submit
    </Button>
  </Form>;
};

export default EditPasswordForm;
