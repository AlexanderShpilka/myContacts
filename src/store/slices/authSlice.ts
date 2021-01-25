import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from 'store/store';
import firebase from '../../firebase';
import { RootState } from 'store/rootReducer';

interface AuthState {
  error: null | boolean | string;
  loading: boolean;
  verificationSuccess: null | boolean;
}

const initialState: AuthState = {
  error: null,
  loading: false,
  verificationSuccess: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    cleanUp(state) {
      state.error = null;
      state.loading = false;
      state.verificationSuccess = null;
    },
    authStart(state) {
      state.loading = true;
      state.error = null;
      state.verificationSuccess = null;
    },
    authSuccess(state) {
      state.loading = false;
    },
    authFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    verificationSuccess(state) {
      state.verificationSuccess = true;
    },
  },
});

export const { cleanUp, authStart, authSuccess, authFailure, verificationSuccess } = authSlice.actions;

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
    dispatch(authStart());
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = firebase.auth().currentUser;
    await user?.sendEmailVerification();
    await firebase.firestore().collection('users').doc(res?.user?.uid).set({
      firstName,
      lastName,
    });
    dispatch(authSuccess());
  } catch (err) {
    dispatch(authFailure(err.message));
  }
};

export const verifyEmail = (): AppThunk => async (dispatch) => {
  try {
    dispatch(authStart());
    const user = firebase.auth().currentUser;
    await user?.sendEmailVerification();
    dispatch(authSuccess());
    dispatch(verificationSuccess());
  } catch (err) {
    dispatch(authFailure(err.message));
  }
};
