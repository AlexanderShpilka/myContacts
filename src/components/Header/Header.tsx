import { FC } from 'react';

import './Header.css';

export const Header: FC = ({ children }) => {
  return <header className="header">{children}</header>;
};
