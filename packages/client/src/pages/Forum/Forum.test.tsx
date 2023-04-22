import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Forum from './Forum';
import { store } from '../../store';
import { BrowserRouter } from 'react-router-dom';

describe('Forum page', () => {
  test('renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Forum />
        </Provider>
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
