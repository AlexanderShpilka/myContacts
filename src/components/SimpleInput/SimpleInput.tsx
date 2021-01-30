import { FormEvent } from 'react';

import './SimpleInput.css';

interface SimpleInputProps {
  type: 'text' | 'email';
  name: string;
  placeholder?: string;
  value: string;
  onChangeHandler: (evt: FormEvent<HTMLInputElement>) => void;
}

export const SimpleInput = ({ type, name, placeholder, value, onChangeHandler }: SimpleInputProps) => {
  return (
    <input
      className="simple-input"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
    />
  );
};
