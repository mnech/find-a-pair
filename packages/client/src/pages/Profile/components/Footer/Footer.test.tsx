import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './index';

describe('Footer profile component', () => {
  describe('should be rendered correctly Footer component', () => {
    test('default', () => {
      let isEditPassword = false;
      let isEditData = false;
      const setIsEditData = (value: boolean) => (isEditData = value);
      const setIsEditPassword = (value: boolean) => (isEditPassword = value);

      const { asFragment } = render(
        <Footer
          setIsEditData={setIsEditData}
          setIsEditPassword={setIsEditPassword}
        />,
      );
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <footer
            class="footer"
          >
            <button
              class="btn btn-link"
              type="button"
            >
              Изменить данные
            </button>
            <button
              class="btn btn-link"
              type="button"
            >
              Изменить пароль
            </button>
            <button
              class="danger btn btn-link"
              type="button"
            >
              Выйти
            </button>
          </footer>
        </DocumentFragment>
      `);
    });
  });
});
