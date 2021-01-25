import { FC } from 'react';

import './styles.css';

export const Container: FC = ({ children }) => {
  return <div className="container">{children}</div>;
};

interface FormContainerProps {
  title: string;
  error?: string;
  success?: string;
}
export const FormContainer: FC<FormContainerProps> = ({ title, error, success, children }) => {
  const errorClassName = error
    ? 'form-container-feedback form-container-feedback--error form-container-feedback--show'
    : '.form-container-feedback';
  const successClassName = success
    ? 'form-container-feedback form-container-feedback--success form-container-feedback--show'
    : '.form-container-feedback';

  return (
    <div className="form-container">
      <h1 className="form-title">{title}</h1>
      {children}
      <div className="form-container-feedback-wrapper">
        <p className={errorClassName}>{error}</p>
        <p className={successClassName}>{success}</p>
      </div>
    </div>
  );
};
