import { Leaderboard } from './Leaderboard';
import { renderWithProviders } from '../../utils/configureStore';

test('Leaderboard renders correctly', () => {
  const { asFragment } = renderWithProviders(<Leaderboard />);
  expect(asFragment()).toMatchSnapshot();
});
