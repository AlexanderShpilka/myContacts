import { useCallback, useState } from 'react';
import debounce from 'lodash/debounce';

import { ContactsControls } from 'containers/contacts/ContactsControls/ContactsControls';
import { ContactList } from 'containers/contacts/ContactList/ContactList';

import './Contacts.css';

export const Contacts = () => {
  const [nameFilter, setNameFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const setSearchQueryWithDebounce = useCallback(
    debounce((value: string): void => setSearchQuery(value), 1000),
    [],
  );

  return (
    <div className="contacts">
      <div className="contacts-wrapper">
        <ContactsControls
          value={nameFilter}
          onNameFilterChangeHandler={({ target }) => {
            setNameFilter((target as HTMLInputElement).value);
            setSearchQueryWithDebounce((target as HTMLInputElement).value);
          }}
        />
        <ContactList searchQuery={searchQuery} />
      </div>
    </div>
  );
};
