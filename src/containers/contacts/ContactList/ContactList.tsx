import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

import { Loader } from 'components/utility';
import { ContactCard } from 'components/ContactCard/ContactCard';
import { EditContact } from 'containers/modals/EditContact/EditContact';
import { DeleteContact } from 'containers/modals/DeleteContact/DeleteContact';

import { RootState } from 'store/rootReducer';
import { ContactWithId, contactsCleanUp, deleteContact } from 'store/slices/contactsSlice';
import './ContactList.css';

export const ContactList = () => {
  const [contactToEdit, setContactToEdit] = useState<ContactWithId | null>(null);
  const [contactToDelete, setContactToDelete] = useState<ContactWithId | null>(null);

  const { uid } = useSelector(({ firebase }: RootState) => firebase.auth);
  const contacts: ContactWithId[] = useSelector(({ firestore }: RootState) => firestore.data.contacts?.[uid]?.contacts);
  const requesting = useSelector(({ firestore }: RootState) => firestore.status.requesting[`contacts/${uid}`]);
  const requested = useSelector(({ firestore }: RootState) => firestore.status.requested[`todos/${uid}`]);

  const dispatch = useDispatch();

  useFirestoreConnect(() => [`contacts/${uid}`]);

  let content;

  if (requesting) {
    content = <Loader />;
  } else if (requested && !contacts?.length) {
    content = <p>Add your first contact</p>;
  }

  return (
    <>
      {content}
      {contacts?.map((contact) => (
        <div className="contact-list-card-wrapper" key={contact.id}>
          <ContactCard
            {...contact}
            onEditButtonClickHandler={() => setContactToEdit(contact)}
            onDeleteButtonClickHandler={() => setContactToDelete(contact)}
          />
        </div>
      ))}

      {contactToEdit && (
        <EditContact
          open={Boolean(contactToEdit)}
          onClickHandler={() => setContactToEdit(null)}
          contact={contactToEdit}
        />
      )}

      {contactToDelete && (
        <DeleteContact
          open={Boolean(contactToDelete)}
          onCancelButtonClickHandler={() => {
            setContactToDelete(null);
            dispatch(contactsCleanUp());
          }}
          onDeleteButtonClickHandler={() => {
            dispatch(deleteContact(contactToDelete, () => setContactToDelete(null)));
          }}
        />
      )}
    </>
  );
};
