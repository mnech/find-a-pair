import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import combineReducers from '../../reducers/index';
import { Profile } from './index';

describe('Profile page', () => {
  describe('should be rendered correctly Profile page', () => {
    test('default', () => {
      const mockStore = configureStore({
        reducer: combineReducers,
      });

      const { asFragment } = render(
        <Provider store={mockStore}>
          <Profile />,
        </Provider>,
      );
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            class="profile"
          >
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
              <h1 />
            </header>
            <div
              class="player-info"
            >
              <div
                class="group"
              >
                <span>
                  Имя
                </span>
                <span />
              </div>
              <div
                class="group"
              >
                <span>
                  Фамилия
                </span>
                <span />
              </div>
              <div
                class="group"
              >
                <span>
                  Имя профиля
                </span>
                <span />
              </div>
              <div
                class="group"
              >
                <span>
                  Логин
                </span>
                <span />
              </div>
              <div
                class="group"
              >
                <span>
                  Почта
                </span>
                <span />
              </div>
              <div
                class="group"
              >
                <span>
                  Телефон
                </span>
                <span />
              </div>
            </div>
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
          </div>
          ,
        </DocumentFragment>
      `);
    });
  });
});
