import { render } from '@testing-library/react';
import { Footer } from './index';
import { BrowserRouter } from 'react-router-dom';

describe('Footer profile component', () => {
  describe('should be rendered correctly Footer component', () => {
    test('default', () => {
      const setIsEditData = jest.fn();
      const setIsEditPassword = jest.fn();

      const { asFragment } = render(
        <BrowserRouter>
          <Footer
            setIsEditData={setIsEditData}
            setIsEditPassword={setIsEditPassword}
          />
        </BrowserRouter>,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
