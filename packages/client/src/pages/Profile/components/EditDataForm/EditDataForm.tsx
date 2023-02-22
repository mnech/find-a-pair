import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { UserData } from '../../../../models/User';
import UsersController from '../../../../controllers/UsersController';
import { regexpTest } from '../../../../utils/validate';
import { FormGroup } from '../../../../components/FormGroup';
import './EditDataForm.scss';

export interface EditDataFormProps {
  data: UserData;
  setIsEditData: (state: boolean) => void;
}

type TFormGroups = {
  [key in keyof UserData]: {
    label: string;
    placeholder: string;
    errorText: string;
    required: boolean;
    type?: string;
  };
};

const FormGroups: TFormGroups = {
  first_name: {
    label: 'Имя',
    placeholder: 'Введите имя',
    errorText: 'Введите верное имя',
    required: true,
  },
  second_name: {
    label: 'Фамилия',
    placeholder: 'Введите фамилию',
    required: true,
    errorText: 'Введите верную фамилию',
  },
  display_name: {
    label: 'Псевдоним',
    placeholder: 'Введите псевдоним',
    required: true,
    errorText: 'Введите верный псевдоним',
  },
  login: {
    label: 'Логин',
    placeholder: 'Введите логин',
    required: true,
    errorText: 'Введите верный логин',
  },
  email: {
    label: 'Email',
    placeholder: 'Введите email',
    required: true,
    errorText: 'Введите верный email',
  },
  phone: {
    label: 'Номер телефона',
    placeholder: 'Введите номер телефона',
    required: true,
    errorText: 'Введите верный номер телефона',
    type: 'tel',
  },
} as const;

const getValidateInit = (data: UserData) => {
  return Object.keys(FormGroups).reduce((acc, key) => {
    acc[key as keyof UserData] = !!data[key as keyof UserData];
    return acc;
  }, {} as Record<keyof UserData, boolean>);
};

const EditDataForm = ({ data, setIsEditData }: EditDataFormProps) => {
  const [validated, setValidated] = useState(() => getValidateInit(data));

  const handleSubmit = async (
    event: React.SyntheticEvent<HTMLFormElement, Event>,
  ) => {
    event.stopPropagation();
    event.preventDefault();
    const form = event.currentTarget;
    if (!Object.values(validated).every((item) => item)) return;

    const data = Object.fromEntries(new FormData(form));
    await UsersController.updateProfile(data as unknown as UserData);

    setIsEditData(false);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setValidated({
      ...validated,
      [name]: regexpTest(name as keyof UserData, value),
    });
  };

  return (
    <Form className="form-edit-data" noValidate onSubmit={handleSubmit}>
      {Object.entries(FormGroups).map(([key, value]) => {
        const { label, placeholder, errorText, required, type } = value;
        const name = key as keyof UserData;

        return (
          <FormGroup
            key={name}
            type={type}
            label={label}
            defaultValue={data[name]}
            name={name}
            placeholder={placeholder}
            required={required}
            errorText={errorText}
            isInvalid={!validated[name]}
            onChange={onChange}
          />
        );
      })}
      <Button variant="primary" type="submit" className="button">
        Submit
      </Button>
    </Form>
  );
};

export default EditDataForm;
