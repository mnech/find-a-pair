import React, { FormEvent, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import AuthController from '../../controllers/AuthController';
import { SignupData } from '../../models/User';
import { regexpTest } from '../../utils/validate';
import { FormGroup } from '../../components/FormGroup';

const fields: SignupData = {
  first_name: 'First name',
  second_name: 'Second name',
  login: 'Login',
  email: 'Email',
  password: 'Password',
  phone: 'Phone',
};

const SignUp = () => {
  const [validated, setValidated] = useState(() =>
    Object.keys(fields).reduce((acc, key) => {
      acc[key as keyof SignupData] = null;
      return acc;
    }, {} as Record<keyof SignupData, null | boolean>),
  );

  const onSubmit = async (event: FormEvent) => {
    event.stopPropagation();
    event.preventDefault();
    if (!Object.values(validated).every((item) => item)) return;
    const data = Object.fromEntries(
      new FormData(event.target as HTMLFormElement),
    );

    await AuthController.signup(data as unknown as SignupData);
  };

  return (
    <div className="container-sm mt-5">
      <Form
        noValidate
        onSubmit={onSubmit}
        className="row d-flex justify-content-center col-lg-4 offset-lg-4 shadow-sm p-5 rounded"
      >
        <h3 className="text-center">Sign up</h3>
        {Object.entries(fields).map(([key, name]) => {
          return (
            <FormGroup
              name={key}
              label={name}
              type={key}
              key={key}
              placeholder={`Enter ${name.toLowerCase()}`}
              onChange={({ target: { value } }) => {
                setValidated({
                  ...validated,
                  [key]: regexpTest(key as keyof SignupData, value),
                });
              }}
              {...(validated[key as keyof SignupData] !== null
                ? { isInvalid: !validated[key as keyof SignupData] }
                : {})}
              errorText={`Please provide a valid ${name.toLowerCase()}`}
            />
          );
        })}
        <Button
          variant="primary"
          type="submit"
          className="btn btn-primary w-50 mb-2"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
