import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from 'store/store';
import firebase from '../../firebase';
import { RootState } from 'store/rootReducer';

interface AuthState {
  error: null | boolean | string;
  loading: boolean;
  verificationSuccess: null | boolean;
  editProfileSuccess: null | boolean;
  deleteProfileError: null | string;
}

const initialState: AuthState = {
  error: null,
  loading: false,
  verificationSuccess: null,
  editProfileSuccess: null,
  deleteProfileError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    cleanUp(state) {
      state.error = null;
      state.loading = false;
      state.verificationSuccess = null;
      state.editProfileSuccess = null;
      state.deleteProfileError = null;
    },
    authStart(state) {
      state.loading = true;
      state.error = null;
      state.verificationSuccess = null;
      state.editProfileSuccess = null;
      state.deleteProfileError = null;
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
    editProfileSuccess(state) {
      state.editProfileSuccess = true;
    },
    deleteProfileFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.deleteProfileError = action.payload;
    },
  },
});

export const {
  cleanUp,
  authStart,
  authSuccess,
  authFailure,
  verificationSuccess,
  editProfileSuccess,
  deleteProfileFailure,
} = authSlice.actions;

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

export const signOut = (): AppThunk => async () => {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.error(err.message);
  }
};

interface SignInInputData {
  email: string;
  password: string;
}
export const signIn = ({ email, password }: SignInInputData): AppThunk => async (dispatch) => {
  try {
    dispatch(authStart());
    await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch(authSuccess());
  } catch (err) {
    dispatch(authFailure(err.message));
  }
};

interface EditProfileInputData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export const editProfile = ({ firstName, lastName, email, password }: EditProfileInputData): AppThunk => async (
  dispatch,
  getState,
) => {
  try {
    dispatch(authStart());
    const user = firebase.auth().currentUser;
    const { email: userEmail, uid } = getState().firebase.auth;
    if (email !== userEmail) {
      await user?.updateEmail(email);
    }
    await firebase.firestore().collection('users').doc(uid).set({
      firstName,
      lastName,
    });
    if (password) {
      await user?.updatePassword(password);
    }
    dispatch(authSuccess());
    dispatch(editProfileSuccess());
  } catch (err) {
    dispatch(authFailure(err.message));
  }
};

export const deleteAccount = (): AppThunk => async (dispatch, getState) => {
  try {
    dispatch(authStart());
    const user = firebase.auth().currentUser;
    const { uid } = getState().firebase.auth;
    firebase.firestore().collection('users').doc(uid).delete();
    firebase.firestore().collection('contacts').doc(uid).delete();
    await user?.delete();
    dispatch(authSuccess());
  } catch (err) {
    dispatch(deleteProfileFailure(err.message));
  }
};
