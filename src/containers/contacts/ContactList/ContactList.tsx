import { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

import { Loader } from 'components/utility';
import { ContactCard } from 'components/ContactCard/ContactCard';
import { EditContact } from 'containers/modals/EditContact/EditContact';
import { DeleteContact } from 'containers/modals/DeleteContact/DeleteContact';

import { RootState } from 'store/rootReducer';
import { ContactWithId, contactsCleanUp, deleteContact } from 'store/slices/contactsSlice';
import './ContactList.css';

interface ContactListProps {
  searchQuery: string;
}

export const ContactList = ({ searchQuery }: ContactListProps) => {
  const [contactToEdit, setContactToEdit] = useState<ContactWithId | null>(null);
  const [contactToDelete, setContactToDelete] = useState<ContactWithId | null>(null);

  const { uid } = useSelector(({ firebase }: RootState) => firebase.auth);
  const contacts: ContactWithId[] = useSelector(({ firestore }: RootState) => firestore.data.contacts?.[uid]?.contacts);
  const requesting = useSelector(({ firestore }: RootState) => firestore.status.requesting[`contacts/${uid}`]);
  const requested = useSelector(({ firestore }: RootState) => firestore.status.requested[`contacts/${uid}`]);

  const dispatch = useDispatch();

  useFirestoreConnect(() => [`contacts/${uid}`]);

  let content;

  if (requesting) {
    content = <Loader />;
  } else if (requested && !contacts?.length) {
    content = <p className="contact-list-text">Add your first contact</p>;
  }

  const visibleContacts = useMemo(() => {
    return contacts
      ?.filter((contact) => {
        const contactFullName = `${contact.firstName}${contact.lastName ? contact.lastName : ''}`;
        return contactFullName.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase());
      })
      .sort((contA, contB) => {
        const contAFullName = `${contA.firstName}${contA.lastName ? contA.lastName : ''}`;
        const contBFullName = `${contB.firstName}${contB.lastName ? contB.lastName : ''}`;
        return contAFullName.localeCompare(contBFullName);
      });
  }, [contacts, searchQuery]);

  return (
    <>
      {content}
      {visibleContacts?.map((contact) => (
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
