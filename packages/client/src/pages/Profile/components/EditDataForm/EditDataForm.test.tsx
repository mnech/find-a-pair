import React from 'react';
import { render } from '@testing-library/react';
import { EditDataForm } from './index';

describe.only('EditDataForm', () => {
  describe('should be rendered correctly EditDataForm component', () => {
    test('default', () => {
      const testUser = {
        first_name: 'Иван',
        second_name: 'Иванов',
        display_name: 'Иванушка',
        login: 'ivanovv',
        email: 'ivanov@yandex.ru',
        phone: '89999999999',
        avatar: '',
      };

      let isEditData = false;
      const setIsEditData = (value: boolean) => (isEditData = value);

      const { asFragment } = render(
        <EditDataForm data={testUser} setIsEditData={setIsEditData} />,
      );
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <form
            class="form-edit-data"
            novalidate=""
          >
            <div
              class="mb-3"
            >
              <label
                class="form-label"
                for="first_name"
              >
                Имя
              </label>
              <input
                class="form-control"
                id="first_name"
                name="first_name"
                placeholder="Введите имя"
                required=""
                type="text"
                value="Иван"
              />
              <div
                class="invalid-feedback"
              >
                Введите верное имя
              </div>
            </div>
            <div
              class="mb-3"
            >
              <label
                class="form-label"
                for="second_name"
              >
                Фамилия
              </label>
              <input
                class="form-control"
                id="second_name"
                name="second_name"
                placeholder="Введите фамилию"
                required=""
                type="text"
                value="Иванов"
              />
              <div
                class="invalid-feedback"
              >
                Введите верную фамилию
              </div>
            </div>
            <div
              class="mb-3"
            >
              <label
                class="form-label"
                for="display_name"
              >
                Псевдоним
              </label>
              <input
                class="form-control"
                id="display_name"
                name="display_name"
                placeholder="Введите псевдоним"
                required=""
                type="text"
                value="Иванушка"
              />
              <div
                class="invalid-feedback"
              >
                Введите верный псевдоним
              </div>
            </div>
            <div
              class="mb-3"
            >
              <label
                class="form-label"
                for="login"
              >
                Логин
              </label>
              <input
                class="form-control"
                id="login"
                name="login"
                placeholder="Введите логин"
                required=""
                type="text"
                value="ivanovv"
              />
              <div
                class="invalid-feedback"
              >
                Введите верный логин
              </div>
            </div>
            <div
              class="mb-3"
            >
              <label
                class="form-label"
                for="email"
              >
                Email
              </label>
              <input
                class="form-control"
                id="email"
                name="email"
                placeholder="Введите email"
                required=""
                type="text"
                value="ivanov@yandex.ru"
              />
              <div
                class="invalid-feedback"
              >
                Введите верный email
              </div>
            </div>
            <div
              class="mb-3"
            >
              <label
                class="form-label"
                for="phone"
              >
                Номер телефона
              </label>
              <input
                class="form-control"
                id="phone"
                name="phone"
                placeholder="Введите номер телефона"
                required=""
                type="tel"
                value="89999999999"
              />
              <div
                class="invalid-feedback"
              >
                Введите верный номер телефона
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
