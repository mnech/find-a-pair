import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import AuthController from '../../controllers/AuthController'

export const Auth = () => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.currentTarget.value)
  }

  const handleChangePasword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  const handleClickSubmit = async (event: React.FormEvent) => {
    await AuthController.signin({ login, password })
  }

  const handleClickSignIn = () => {
    //TODO Добавить редирект
  }

  return (
    <div className="container-sm mt-5" style={{ padding: '10em 0' }}>
      <Form
        className="row d-flex justify-content-center col-lg-4 offset-lg-4 shadow-sm p-5 rounded needs-validation"
        onSubmit={handleClickSubmit}>
        <div className="form-outline">
          <input
            type="text"
            id="login"
            className="form-control form-control-lg"
            required
            onChange={handleChangeLogin}
            value={login}
          />
          <label className="form-label" htmlFor="login">
            Логин
          </label>
        </div>
        <div className="form-outline">
          <input
            type="password"
            id="password"
            className="form-control form-control-lg"
            onChange={handleChangePasword}
            value={password}
            required
          />
          <label className="form-label" htmlFor="password">
            Пароль
          </label>
        </div>
        <Button type="submit" className="btn btn-primary w-50">
          Войти
        </Button>
        <div className="text-center">
          <Button variant="link" onClick={handleClickSignIn}>
            Нет аккаунта?
          </Button>
        </div>
      </Form>
    </div>
  )
}
