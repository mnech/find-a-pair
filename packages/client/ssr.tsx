import { renderToString } from 'react-dom/server';
import { store } from './src/store';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import * as React from 'react';
import AppRouter from './src/components/router/AppRouter';

async function render(uri: string) {
  const initialState = store.getState();
  const renderResult = renderToString(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={uri}>
          <AppRouter />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
  );
  return [initialState, renderResult];
}

export { render };
