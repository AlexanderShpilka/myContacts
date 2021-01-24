import { FC } from 'react';

import './Button.css';

type ButtonType = 'button' | 'submit';

type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonProps {
  type: ButtonType;
  variant: ButtonVariant;
  stretch?: boolean;
}

export const Button: FC<ButtonProps> = ({ type, variant, stretch, children }) => {
  const buttonClassName = `button ${variant} ${stretch ? 'stretch' : ''}`;

  return (
    <button className={buttonClassName} type={type}>
      {children}
    </button>
  );
};
