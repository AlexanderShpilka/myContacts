import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './NavItem.css';

interface NavItemProps {
  to: string;
}

export const NavItem: FC<NavItemProps> = ({ children, to }) => {
  return (
    <NavLink to={to} className="nav-item" activeClassName="active">
      {children}
    </NavLink>
  );
};
