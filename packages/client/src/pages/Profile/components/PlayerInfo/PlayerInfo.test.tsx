import React from 'react';
import { render } from '@testing-library/react';
import { PlayerInfo } from './index';

describe('PlayerInfo', () => {
  describe('should be rendered correctly PlayerInfo component', () => {
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

      const { asFragment } = render(<PlayerInfo data={testUser} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
