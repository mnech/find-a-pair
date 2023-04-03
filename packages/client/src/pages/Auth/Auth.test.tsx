import { renderWithProviders } from '../../utils/configureStore';
import { Auth } from './Auth';

test('Auth renders correctly', () => {
  const { asFragment } = renderWithProviders(<Auth />);
  expect(asFragment()).toMatchSnapshot();
});
