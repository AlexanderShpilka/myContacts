import { FC } from 'react';

import './Button.css';

type ButtonType = 'button' | 'submit';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning';

interface ButtonProps {
  type: ButtonType;
  variant: ButtonVariant;
  stretch?: boolean;
  disabled?: boolean;
  onClickHandler?: () => void;
  round?: boolean;
}

export const Button: FC<ButtonProps> = ({ type, variant, stretch, disabled, round, onClickHandler, children }) => {
  const buttonClassName = `button ${variant} ${stretch ? 'stretch' : ''} ${round ? 'round' : ''}`;

  return (
    <button className={buttonClassName} type={type} disabled={disabled} onClick={onClickHandler}>
      {children}
    </button>
  );
};
