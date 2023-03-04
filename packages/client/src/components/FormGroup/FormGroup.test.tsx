import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { FormGroup } from './index';

describe('FormGroup', () => {
  describe('should be rendered correctly FormGroup component', () => {
    test('default', () => {
      const { asFragment } = render(
        <FormGroup name="default" label="Default" />,
      );
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            class="mb-3"
          >
            <label
              class="form-label"
              for="default"
            >
              Default
            </label>
            <input
              class="form-control"
              id="default"
              name="default"
              type="text"
              value=""
            />
          </div>
        </DocumentFragment>
      `);
    });
    test('Default value', () => {
      render(
        <FormGroup
          name="value"
          label="Default value"
          defaultValue="default value"
        />,
      );
      const label = screen.getByText('Default value');
      const input = label?.parentElement?.querySelector('input');
      if (input) {
        expect(input.value === 'default value').toBeTruthy();
      } else {
        expect(false).toBeTruthy();
      }
    });
    test('isInvalid', () => {
      render(
        <FormGroup
          name="onchange"
          label="Change value"
          errorText="Error text"
          isInvalid
        />,
      );
      const error = screen.getByText('Error text');
      expect(error).toBeTruthy();
    });
  });
  describe('should be clickable UDSButton component', () => {
    test('onchange', () => {
      render(<FormGroup name="onchange" label="Change value" />);
      const label = screen.getByText('Change value');
      const input = label?.parentElement?.querySelector('input');
      if (input) {
        fireEvent.change(input, { target: { value: 'change value' } });
        expect(input.value).toBe('change value');
      } else {
        expect(false).toBeTruthy();
      }
    });
    test('onchange with the wrong type', () => {
      render(<FormGroup name="onchange" label="Change value" type="number" />);
      const label = screen.getByText('Change value');
      const input = label?.parentElement?.querySelector('input');
      if (input) {
        fireEvent.change(input, { target: { value: 'change value' } });
        expect(input.value).toBe('');
      } else {
        expect(false).toBeTruthy();
      }
    });
  });
});
