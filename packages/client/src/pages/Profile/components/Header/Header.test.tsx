import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './index';

describe('Header profile component', () => {
  describe('should be rendered correctly Header component', () => {
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

      const { asFragment } = render(
        <Header avatar={testUser.avatar} name={testUser.first_name} />,
      );
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <header
            class="header"
          >
            <img
              alt="Аватар"
              class="avatar rounded-3 shadow"
              src=""
            />
            <input
              accept="image/*"
              hidden=""
              type="file"
            />
            <h1>
              Иван
            </h1>
          </header>
        </DocumentFragment>
      `);
    });
  });
});
