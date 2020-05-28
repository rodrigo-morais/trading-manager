import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';

import './services/configure-webpack-public-path';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('[data-main]')
);
