import { ContactsControls } from 'containers/contacts/ContactsControls/ContactsControls';
import { ContactList } from 'containers/contacts/ContactList/ContactList';

import './Contacts.css';

export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts-wrapper">
        <ContactsControls />
        <ContactList />
      </div>
    </div>
  );
};
