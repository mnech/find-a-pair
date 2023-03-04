import React from 'react';
import { render } from '@testing-library/react';
import { EditPasswordForm } from './index';

describe('EditPasswordForm', () => {
  describe('should be rendered correctly EditPasswordForm component', () => {
    test('default', () => {
      let isEditPassword = false;
      const setIsEditPassword = (value: boolean) => (isEditPassword = value);

      const { asFragment } = render(
        <EditPasswordForm setIsEditPassword={setIsEditPassword} />,
      );
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <form
            class="form-edit-password"
            novalidate=""
          >
            <div
              class="mb-3"
            >
              <label
                class="form-label"
                for="oldPassword"
              >
                Старый пароль
              </label>
              <input
                class="form-control is-invalid"
                id="oldPassword"
                name="oldPassword"
                placeholder="Введите старый пароль"
                required=""
                type="password"
                value=""
              />
              <div
                class="invalid-feedback"
              >
                Введите верный старый пароль
              </div>
            </div>
            <div
              class="mb-3"
            >
              <label
                class="form-label"
                for="newPassword"
              >
                Новый пароль
              </label>
              <input
                class="form-control is-invalid"
                id="newPassword"
                name="newPassword"
                placeholder="Введите новый пароль"
                required=""
                type="password"
                value=""
              />
              <div
                class="invalid-feedback"
              >
                Введите верный новый пароль
              </div>
            </div>
            <div
              class="mb-3"
            >
              <label
                class="form-label"
                for="repeatNewPassword"
              >
                Повторите новый пароль
              </label>
              <input
                class="form-control is-invalid"
                id="repeatNewPassword"
                name="repeatNewPassword"
                placeholder="Введите повторно новый пароль"
                required=""
                type="password"
                value=""
              />
              <div
                class="invalid-feedback"
              >
                Пароли не совпадают
              </div>
            </div>
            <button
              class="button btn btn-primary"
              type="submit"
            >
              Submit
            </button>
          </form>
        </DocumentFragment>
      `);
    });
  });
});
