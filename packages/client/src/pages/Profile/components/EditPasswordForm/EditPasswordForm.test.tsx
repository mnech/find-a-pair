import React from 'react';
import { render } from '@testing-library/react';
import { EditPasswordForm } from './index';

describe('EditPasswordForm', () => {
  describe('should be rendered correctly EditPasswordForm component', () => {
    test('default', () => {
      const setIsEditPassword = jest.fn();

      const { asFragment } = render(
        <EditPasswordForm setIsEditPassword={setIsEditPassword} />,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
