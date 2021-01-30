import { FormEvent } from 'react';

import { SimpleInput } from 'components/SimpleInput/SimpleInput';
import { Button } from 'components/Button/Button';

import './ContactsControls.css';

interface ContactsControlsProps {
  value: string;
  onNameFilterChangeHandler: (evt: FormEvent<HTMLInputElement>) => void;
}

export const ContactsControls = ({ value, onNameFilterChangeHandler }: ContactsControlsProps) => {
  return (
    <div className="contacts-controls">
      <div className="contacts-controls-input-wrapper">
        <SimpleInput
          type="text"
          name="search"
          placeholder="Search..."
          value={value}
          onChangeHandler={onNameFilterChangeHandler}
        />
      </div>
      <Button type="button" variant="success">
        +
      </Button>
    </div>
  );
};
