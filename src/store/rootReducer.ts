import { combineReducers } from '@reduxjs/toolkit';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import authReducer from 'store/slices/authSlice';
import contactsReducer from 'store/slices/contactsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  contacts: contactsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
