import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './App';
import { store } from './redux/store';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
