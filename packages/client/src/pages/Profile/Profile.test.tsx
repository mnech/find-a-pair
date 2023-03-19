import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import combineReducers from '../../reducers/index';
import { Profile } from './index';

describe('Profile page', () => {
  describe('should be rendered correctly Profile page', () => {
    test('default', () => {
      const store = configureStore({
        reducer: combineReducers,
      });

      const { asFragment } = render(
        <Provider store={store}>
          <Profile />,
        </Provider>,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
