import React, { FormEvent, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AuthController from '../../controllers/AuthController'
import { Password, SignupData } from '../../models/User'
import { regexpTest } from '../../utils/validate'

interface fields {
  "first_name": string,
  "second_name": string,
  "login": string,
  "email": string,
  "password": string,
  "phone": string,
}

const fields: fields = {
  first_name: 'First name',
  second_name: 'Second name',
  login: 'Login',
  email: 'Email',
  password: 'Password',
  phone: 'Phone'
}

const SignUp = () => {
  const [validated, setValidated] = useState(Object.keys(fields).reduce((acc, key) => {
    acc[key as keyof fields] = null;
    return acc;
  }, {} as Record<keyof fields, null | boolean>));

  const onSubmit = async (event: FormEvent) => {
    event.stopPropagation()
    event.preventDefault();
    if (!Object.values(validated).every(item => item)) return;
    const data = Object.fromEntries(new FormData(event.target as HTMLFormElement));

    const userId = await AuthController.signup(data as unknown as SignupData) // TODO redux store?
  }

  return (
    <div className="d-flex w-100 h-100">
      <Form noValidate onSubmit={onSubmit} className="border rounded p-4 m-auto w-50">
        <h3 className="text-center">Sign up</h3>
        {Object.entries(fields).map(([key, name]) => {
          return (
            <Form.Group className="mb-3" controlId={key} key={key}>
              <Form.Label>{name}</Form.Label>
              <Form.Control
                onChange={({ target: { value } }) => {
                  setValidated({ ...validated, [key]: regexpTest(key as keyof fields, value) })
                }}
                type={key}
                placeholder={`Enter ${name.toLowerCase()}`}
                name={key}
                {...(validated[key as keyof fields] !== null ? { isInvalid: !validated[key as keyof fields]} : {} )}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid {name}
              </Form.Control.Feedback>
          </Form.Group>
          )
        })}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default SignUp
