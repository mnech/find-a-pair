import { renderToString } from 'react-dom/server';
import App from './src/App';
import { store } from './src/store';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import * as React from 'react';

async function render(uri: string) {
  const initialState = store.getState();
  const renderResult = renderToString(
    <StaticRouter location={uri}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
  );
  return [initialState, renderResult];
}

export { render };
