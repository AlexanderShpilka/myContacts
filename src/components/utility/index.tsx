import { FC } from 'react';

import './styles.css';

export const Container: FC = ({ children }) => {
  return <div className="container">{children}</div>;
};
