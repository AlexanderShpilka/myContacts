import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from 'store/store';
import firebase from '../../firebase';
import { RootState } from 'store/rootReducer';

interface AuthState {
  error: null | boolean | string;
  loading: boolean;
}

const initialState: AuthState = {
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    cleanUp(state) {
      state.error = null;
      state.loading = false;
    },
    signUpStart(state) {
      state.loading = true;
      state.error = null;
    },
    signUpSuccess(state) {
      state.loading = false;
      state.error = false;
    },
    signUpFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { cleanUp, signUpStart, signUpSuccess, signUpFailure } = authSlice.actions;

export default authSlice.reducer;

export const selectAuthState = ({ auth }: RootState) => auth;

interface SignUpInputData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signUp = ({ firstName, lastName, email, password }: SignUpInputData): AppThunk => async (dispatch) => {
  try {
    dispatch(signUpStart());
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = firebase.auth().currentUser;
    await user?.sendEmailVerification();
    await firebase.firestore().collection('users').doc(res?.user?.uid).set({
      firstName,
      lastName,
    });
    dispatch(signUpSuccess());
  } catch (err) {
    dispatch(signUpFailure(err.message));
  }
};
