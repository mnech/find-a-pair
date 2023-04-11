import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { renderWithProviders } from './utils/configureStore';
import { routes } from './models/App';

const appContent = 'Вот тут будет жить ваше приложение :)';

// @ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve('hey') }),
);

test('Example test', async () => {
  renderWithProviders(
    <MemoryRouter initialEntries={[routes.profile]}>
      <App />
    </MemoryRouter>,
  );
  //expect(screen.getByText(appContent)).toBeDefined()
});
