import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { HashRouter } from 'react-router-dom';

import { App } from './App';

import store, { rrfProps } from 'store/store';
import './index.css';

render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
        </ReactReduxFirebaseProvider>
      </HashRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
