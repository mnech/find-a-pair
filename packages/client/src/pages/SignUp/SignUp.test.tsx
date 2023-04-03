import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignUp from './SignUp';

describe('SignUp page', () => {
  describe('should be rendered', () => {
    test('default', () => {
      render(<SignUp />);
      expect(screen.getByText('Sign up')).toBeInTheDocument();
    });
  });

  describe('invalid input', () => {
    test('invalid feedback', () => {
      const { container } = render(<SignUp />);
      const input = container.querySelector('#first_name');
      input && fireEvent.change(input, { target: { value: '123invalid' } });
      input && expect(input.classList.contains('is-invalid')).toBeTruthy();
    });

    test('valid', () => {
      const { container } = render(<SignUp />);
      const input = container.querySelector('#first_name');
      input && fireEvent.change(input, { target: { value: 'Name' } });
      input && expect(input.classList.contains('is-invalid')).toBeFalsy();
    });
  });
});
