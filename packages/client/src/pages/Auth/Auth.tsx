import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import AuthController from '../../controllers/AuthController';
import { useSelector } from 'react-redux';
import { routes } from '../../models/App';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import ContinueWithYandex from '../../components/continueWithYandex/ContinueWithYandex';

export const Auth = () => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const error = useSelector((state: RootState) => state.auth.error);
  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.currentTarget.value);
  };
  const handleChangePasword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleClickSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await AuthController.signin({ login, password });
  };

  return (
    <div className="container-sm mt-5" style={{ padding: '10em 0' }}>
      {error && (
        <div className="alert alert-danger col-lg-4 offset-lg-4" role="alert">
          {error}
        </div>
      )}
      <Form
        className="row d-flex justify-content-center col-lg-4 offset-lg-4 shadow-sm p-5 rounded needs-validation"
        onSubmit={handleClickSubmit}
      >
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
        <Button type="submit" className="btn btn-primary w-50 mb-2">
          Войти
        </Button>
        <ContinueWithYandex />
        <div className="text-center">
          <Link to={routes.signUp} className="link-primary">
            Нет аккаунта?
          </Link>
        </div>
      </Form>
    </div>
  );
};
