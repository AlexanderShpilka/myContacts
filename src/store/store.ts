import { configureStore, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { getFirebase, actionTypes as rrfActionTypes } from 'react-redux-firebase';
import { constants as rfConstants, getFirestore, createFirestoreInstance } from 'redux-firestore';

import rootReducer, { RootState } from 'store/rootReducer';
import firebase from '../firebase';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        // just ignore every redux-firebase and react-redux-firebase action type
        ...Object.keys(rfConstants.actionTypes).map((type) => `${rfConstants.actionsPrefix}/${type}`),
        ...Object.keys(rrfActionTypes).map((type) => `@@reactReduxFirebase/${type}`),
      ],
      ignoredPaths: ['firebase', 'firestore'],
    },
    thunk: {
      extraArgument: { getFirebase, getFirestore },
    },
  }),
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  attachAuthIsReady: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export { rrfProps };

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, { getFirebase: any; getFirestore: any }, Action<string>>;

export default store;
