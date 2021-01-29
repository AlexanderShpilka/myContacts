import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';

import store, { rrfProps } from 'store/store';
import './index.css';

render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
        </ReactReduxFirebaseProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
