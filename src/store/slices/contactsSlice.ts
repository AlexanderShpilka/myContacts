import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

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
    contactsStart(state) {
      state.error = null;
      state.loading = true;
    },
    contactsSuccess(state) {
      state.loading = false;
    },
    contactsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { contactsCleanUp, contactsStart, contactsSuccess, contactsFailure } = contactsSlice.actions;

export default contactsSlice.reducer;

export const selectContactsState = ({ contacts }: RootState) => contacts;

export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  category: string;
  birthday: string;
}
export const createContact = (newContactData: Contact, cb: () => void): AppThunk => async (dispatch, getState) => {
  const { uid } = getState().firebase.auth;
  const newContact = {
    id: uuidv4(),
    ...newContactData,
  };
  dispatch(contactsStart());

  try {
    const userRef = await firebase.firestore().collection('contacts').doc(uid);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      await userRef.set({ contacts: [newContact] });
    } else {
      await userRef.update({
        contacts: firebase.firestore.FieldValue.arrayUnion(newContact),
      });
    }

    cb();
    dispatch(contactsSuccess());
  } catch (err) {
    dispatch(contactsFailure(err.message));
  }
};

export interface ContactWithId extends Contact {
  id: string;
}
export const editContact = (id: string, contactData: Contact, cb: () => void): AppThunk => async (
  dispatch,
  getState,
) => {
  const { uid } = getState().firebase.auth;
  dispatch(contactsStart());

  try {
    const userRef = await firebase.firestore().collection('contacts').doc(uid);
    const snapShot = await userRef.get();
    const userContacts: ContactWithId[] = snapShot.data()?.contacts;

    const userNewContacts = userContacts.map((contact) => {
      if (contact.id === id) {
        return { ...contact, ...contactData };
      }
      return contact;
    });

    await userRef.update({
      contacts: userNewContacts,
    });

    cb();
    dispatch(contactsSuccess());
  } catch (err) {
    dispatch(contactsFailure(err.message));
  }
};

export const deleteContact = (contact: ContactWithId, cb: () => void): AppThunk => async (dispatch, getState) => {
  const { uid } = getState().firebase.auth;
  dispatch(contactsStart());

  try {
    const userRef = await firebase.firestore().collection('contacts').doc(uid);

    await userRef.update({
      contacts: firebase.firestore.FieldValue.arrayRemove(contact),
    });

    cb();
    dispatch(contactsSuccess());
  } catch (err) {
    dispatch(contactsFailure(err.message));
  }
};
