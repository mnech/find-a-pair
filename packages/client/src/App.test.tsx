import App from './App';
import { renderWithProviders } from './utils/configureStore';

const appContent = 'Вот тут будет жить ваше приложение :)';

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') }),
);

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    useParams: jest.fn(),
    useHistory: jest.fn(),
  };
});
test('Example test', async () => {
  const screen = renderWithProviders(<App />);
  expect(screen).not.toBeNull();
});
