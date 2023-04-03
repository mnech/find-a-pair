import { renderWithProviders } from '../../utils/configureStore';
import { EndGameScreen } from './EndGameScreen';

test('End Game renders correctly', () => {
  const { asFragment } = renderWithProviders(<EndGameScreen />);
  expect(asFragment()).toMatchSnapshot();
});
