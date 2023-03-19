import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './index';

describe('Footer profile component', () => {
  describe('should be rendered correctly Footer component', () => {
    test('default', () => {
      const setIsEditData = jest.fn();
      const setIsEditPassword = jest.fn();

      const { asFragment } = render(
        <Footer
          setIsEditData={setIsEditData}
          setIsEditPassword={setIsEditPassword}
        />,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
