import React from 'react';
import { render } from '@testing-library/react';
import { Group } from './index';

describe('Group profile component', () => {
  describe('should be rendered correctly Group component', () => {
    test('default', () => {
      const { asFragment } = render(<Group name="Name" value="value" />);
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            class="group"
          >
            <span>
              Name
            </span>
            <span>
              value
            </span>
          </div>
        </DocumentFragment>
      `);
    });
  });
});
