import { renderToString } from 'react-dom/server';
import App from './src/App';
import { store } from './src/store';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import * as React from 'react';

async function render(uri: string) {
  const initialState = store.getState();
  const renderResult = renderToString(
    <Provider store={store}>
      <StaticRouter location={uri}>
        <App />
      </StaticRouter>
    </Provider>,
  );
  console.log('renderResult', renderResult);
  console.log('initialState', initialState);
  return [initialState, renderResult];
}

export { render };
