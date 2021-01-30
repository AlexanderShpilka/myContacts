import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from 'store/store';
import firebase from '../../firebase';
import { RootState } from 'store/rootReducer';

interface ContactsState {
  error: null | boolean | string;
  loading: boolean;
}

const initialState: ContactsState = {
  error: null,
  loading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    contactsCleanUp(state) {
      state.error = null;
      state.loading = false;
    },
  },
});

export const { contactsCleanUp } = contactsSlice.actions;

export default contactsSlice.reducer;

export const selectContactsState = ({ contacts }: RootState) => contacts;
