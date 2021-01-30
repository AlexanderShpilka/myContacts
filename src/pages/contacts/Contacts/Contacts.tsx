import { useState } from 'react';

import { ContactsControls } from 'containers/contacts/ContactsControls/ContactsControls';
import { ContactList } from 'containers/contacts/ContactList/ContactList';

import './Contacts.css';

export const Contacts = () => {
  const [nameFilter, setNameFilter] = useState('');

  return (
    <div className="contacts">
      <div className="contacts-wrapper">
        <ContactsControls
          value={nameFilter}
          onNameFilterChangeHandler={({ target }) => setNameFilter((target as HTMLInputElement).value)}
        />
        <ContactList />
      </div>
    </div>
  );
};
