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

      const setIsEditData = jest.fn();

      const { asFragment } = render(
        <EditDataForm data={testUser} setIsEditData={setIsEditData} />,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
