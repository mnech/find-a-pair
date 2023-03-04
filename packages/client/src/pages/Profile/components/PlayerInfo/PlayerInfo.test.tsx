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
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            class="player-info"
          >
            <div
              class="group"
            >
              <span>
                Имя
              </span>
              <span>
                Иван
              </span>
            </div>
            <div
              class="group"
            >
              <span>
                Фамилия
              </span>
              <span>
                Иванов
              </span>
            </div>
            <div
              class="group"
            >
              <span>
                Имя профиля
              </span>
              <span>
                Иванушка
              </span>
            </div>
            <div
              class="group"
            >
              <span>
                Логин
              </span>
              <span>
                ivanovv
              </span>
            </div>
            <div
              class="group"
            >
              <span>
                Почта
              </span>
              <span>
                ivanov@yandex.ru
              </span>
            </div>
            <div
              class="group"
            >
              <span>
                Телефон
              </span>
              <span>
                89999999999
              </span>
            </div>
          </div>
        </DocumentFragment>
      `);
    });
  });
});
