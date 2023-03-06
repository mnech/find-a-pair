import { render } from '@testing-library/react';
import { StartGameScreen } from './StartGameScreen';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Start game screen', () => {
  it('should render', () => {
    const { container } = render(
      <Router>
        <StartGameScreen />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
