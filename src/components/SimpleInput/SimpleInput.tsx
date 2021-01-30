import './SimpleInput.css';

interface SimpleInputProps {
  type: 'text' | 'email';
  name: string;
  placeholder?: string;
}

export const SimpleInput = (props: SimpleInputProps) => {
  return <input className="simple-input" {...props} />;
};
