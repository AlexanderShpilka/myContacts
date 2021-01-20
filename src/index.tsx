import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import { App } from './App';

import store, { rrfProps } from 'store/store';

render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
