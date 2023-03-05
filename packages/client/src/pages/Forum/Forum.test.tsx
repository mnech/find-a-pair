import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Forum from './Forum';
import { store } from '../../store';

describe('Forum page', () => {
  test('renders correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Forum />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
