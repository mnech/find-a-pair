import { renderWithProviders } from '../../utils/configureStore';
import { EndGameScreen } from './EndGameScreen';

test('Auth renders correctly', () => {
  const { asFragment } = renderWithProviders(<EndGameScreen />);
  expect(asFragment()).toMatchSnapshot();
});
