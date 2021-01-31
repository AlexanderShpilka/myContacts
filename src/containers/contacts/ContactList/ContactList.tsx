import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

import { Loader } from 'components/utility';
import { ContactCard } from 'components/ContactCard/ContactCard';

import { RootState } from 'store/rootReducer';
import { Contact } from 'store/slices/contactsSlice';
import './ContactList.css';

export const ContactList = () => {
  const { uid } = useSelector(({ firebase }: RootState) => firebase.auth);
  const contacts: Contact[] = useSelector(({ firestore }: RootState) => firestore.data.contacts?.[uid]?.contacts);
  const requesting = useSelector(({ firestore }: RootState) => firestore.status.requesting[`contacts/${uid}`]);
  const requested = useSelector(({ firestore }: RootState) => firestore.status.requested[`todos/${uid}`]);

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
        <div className="contact-list-card-wrapper">
          <ContactCard {...contact} />
        </div>
      ))}
    </>
  );
};
