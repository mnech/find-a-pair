import { render } from '@testing-library/react';
import { StartGameScreen } from './StartGameScreen';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Start game screen', () => {
  it('should render', () => {
    const element = render(
      <Router>
        <StartGameScreen />
      </Router>,
    );
    expect(element).toMatchSnapshot();
  });
});
