import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserData } from '../../../../types/interfaces';
import UsersController from '../../../../controllers/UsersController';
import { regexpTest } from '../../../../utils/validate';

export interface EditDataFormProps {
  data: UserData;
  setIsEditData: (state: boolean) => void,
}

const fields: UserData = {
  first_name: 'First name',
  second_name: 'Second name',
  display_name: 'Display name',
  login: 'Login',
  email: 'Email',
  phone: 'Phone'
};

const getValidateFields = (data: UserData) => {
  return Object.keys(fields).reduce((acc, key) => {
    acc[key as keyof UserData] = !!data[key as keyof UserData];
    return acc;
  }, {} as Record<keyof UserData, boolean>);
};

const EditDataForm = ({ data, setIsEditData }: EditDataFormProps) => {
  const [validated, setValidated] = useState(getValidateFields(data));

  const handleSubmit = async (event: React.FormEvent) => {
    event.stopPropagation();
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    if (!Object.values(validated).every(item => item)) return;

    const data = Object.fromEntries(new FormData(form));
    await UsersController.profile(data as unknown as UserData);

    setIsEditData(false);
  };

  return <Form className='form-edit-data' noValidate onSubmit={handleSubmit}>
    <Form.Group className='mb-3' controlId='first_name'>
      <Form.Label>First name</Form.Label>
      <Form.Control
        required
        type='text'
        placeholder='Enter first name'
        name='first_name'
        defaultValue={data.first_name}
        onChange={({ currentTarget: { value } }) => {
          setValidated(
            {
              ...validated,
              first_name: regexpTest('first_name', value)
            });
        }}
        isValid={validated['first_name']}
        isInvalid={!validated['first_name']}
      />
      <Form.Control.Feedback type='invalid'>
        Please provide a valid first name
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className='mb-3' controlId='second_name'>
      <Form.Label>Second name</Form.Label>
      <Form.Control
        required
        type='text'
        placeholder='Enter second name'
        name='second_name'
        defaultValue={data.second_name}
        onChange={({ currentTarget: { value } }) => {
          setValidated(
            {
              ...validated,
              second_name: regexpTest('second_name', value)
            });
        }}
        isValid={validated['second_name']}
        isInvalid={!validated['second_name']}
      />
      <Form.Control.Feedback type='invalid'>
        Please provide a valid second name
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className='mb-3' controlId='display_name'>
      <Form.Label>Display name</Form.Label>
      <Form.Control
        required
        type='text'
        placeholder='Enter display name'
        name='display_name'
        defaultValue={data.display_name}
        onChange={({ currentTarget: { value } }) => {
          setValidated(
            {
              ...validated,
              display_name: regexpTest('display_name', value)
            });
        }}
        isValid={validated['display_name']}
        isInvalid={!validated['display_name']}
      />
      <Form.Control.Feedback type='invalid'>
        Please provide a valid display name
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className='mb-3' controlId='login'>
      <Form.Label>Login</Form.Label>
      <Form.Control
        required
        type='text'
        placeholder='Enter login'
        name='login'
        defaultValue={data.login}
        onChange={({ currentTarget: { value } }) => {
          setValidated(
            {
              ...validated,
              login: regexpTest('login', value)
            });
        }}
        isValid={validated['login']}
        isInvalid={!validated['login']}
      />
      <Form.Control.Feedback type='invalid'>
        Please provide a valid login
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className='mb-3' controlId='email'>
      <Form.Label>Email</Form.Label>
      <Form.Control
        required
        type='email'
        placeholder='Enter email'
        name='email'
        defaultValue={data.email}
        onChange={({ currentTarget: { value } }) => {
          setValidated(
            {
              ...validated,
              email: regexpTest('email', value)
            });
        }}
        isValid={validated['email']}
        isInvalid={!validated['email']}
      />
      <Form.Control.Feedback type='invalid'>
        Please provide a valid email
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className='mb-3' controlId='phone'>
      <Form.Label>Phone</Form.Label>
      <Form.Control
        required
        type='tel'
        placeholder='Enter phone'
        name='phone'
        defaultValue={data.phone}
        onChange={({ currentTarget: { value } }) => {
          setValidated(
            {
              ...validated,
              phone: regexpTest('phone', value)
            });
        }}
        isValid={validated['phone']}
        isInvalid={!validated['phone']}
      />
      <Form.Control.Feedback type='invalid'>
        Please provide a valid phone
      </Form.Control.Feedback>
    </Form.Group>
    <Button variant='primary' type='submit' className='button'>
      Submit
    </Button>
  </Form>;
};

export default EditDataForm;
