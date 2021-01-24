import { FC } from 'react';

import './styles.css';

export const Container: FC = ({ children }) => {
  return <div className="container">{children}</div>;
};

interface FormContainerProps {
  title: string;
}
export const FormContainer: FC<FormContainerProps> = ({ title, children }) => {
  return (
    <div className="form-container">
      <h1 className="form-title">{title}</h1>
      {children}
    </div>
  );
};
