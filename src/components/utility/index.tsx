import { FC } from 'react';

import './styles.css';

export const Container: FC = ({ children }) => {
  return <div className="container">{children}</div>;
};

interface FormContainerProps {
  title: string;
  error?: string;
}
export const FormContainer: FC<FormContainerProps> = ({ title, error, children }) => {
  const errorClassName = error ? 'form-container-error form-container-error--show' : 'form-container-error';

  return (
    <div className="form-container">
      <h1 className="form-title">{title}</h1>
      {children}
      <div className="form-container-error-wrapper">
        <p className={errorClassName}>{error}</p>
      </div>
    </div>
  );
};
