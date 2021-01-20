import { combineReducers } from '@reduxjs/toolkit';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import testReducer from 'store/slices/testSlice';

const rootReducer = combineReducers({
  test: testReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
