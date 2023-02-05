import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UsersController from '../../../../controllers/UsersController';
import { Password } from '../../../../models/User';
import { regexpTest } from '../../../../utils/validate';

export interface EditPasswordFormProps {
  setIsEditPassword: (state: boolean) => void,
}

const fields: Password = {
  oldPassword: '',
  newPassword: ''
};

const getValidateFields = (data: Password) => {
  return Object.keys(fields).reduce((acc, key) => {
    acc[key as keyof Password] = !!data[key as keyof Password];
    return acc;
  }, {} as Record<keyof Password, boolean>);
};

const EditPasswordForm = ({ setIsEditPassword }: EditPasswordFormProps) => {
  const [validated, setValidated] = useState(getValidateFields(fields));
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordRepeat, setNewPasswordRepeat] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.stopPropagation();
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    if (!Object.values(validated).every(item => item)) return;

    const data = Object.fromEntries(new FormData(form));
    await UsersController.updatePassword(data as unknown as Password);

    setIsEditPassword(false);
  };

  return <Form className='form-edit-password' noValidate onSubmit={handleSubmit}>
    <Form.Group className='mb-3' controlId='oldPassword'>
      <Form.Label>Old password</Form.Label>
      <Form.Control
        required
        type='password'
        placeholder='Enter old password'
        name='oldPassword'
        onChange={({ currentTarget: { value } }) => {
          setValidated(
            {
              ...validated,
              oldPassword: regexpTest('password', value)
            });
          setOldPassword(value);
        }}
        isValid={validated['oldPassword'] && !!oldPassword}
        isInvalid={!validated['oldPassword'] || !oldPassword}
      />
      <Form.Control.Feedback type='invalid'>
        Please provide a valid old password
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className='mb-3' controlId='newPassword'>
      <Form.Label>New password</Form.Label>
      <Form.Control
        required
        type='password'
        placeholder='Enter new password'
        name='newPassword'
        onChange={({ currentTarget: { value } }) => {
          setValidated(
            {
              ...validated,
              newPassword: regexpTest('password', value)
            });
          setNewPassword(value);
        }}
        isValid={validated['newPassword'] && !!newPassword}
        isInvalid={!validated['newPassword'] || !newPassword}
      />
      <Form.Control.Feedback type='invalid'>
        Please provide a valid new password
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className='mb-3' controlId='repeatNewPassword'>
      <Form.Label>Repeat new password</Form.Label>
      <Form.Control
        required
        type='password'
        placeholder='Repeat new password'
        name='repeatNewPassword'
        onChange={({ currentTarget: { value } }) => {
          setNewPasswordRepeat(value);
        }}
        isValid={newPassword === newPasswordRepeat && !!newPassword}
        isInvalid={newPassword !== newPasswordRepeat}
      />
      <Form.Control.Feedback type='invalid'>
        Password mismatch
      </Form.Control.Feedback>
    </Form.Group>
    <Button variant='primary' type='submit' className='button'>
      Submit
    </Button>
  </Form>;
};

export default EditPasswordForm;
