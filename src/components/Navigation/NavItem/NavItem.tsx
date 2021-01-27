import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './NavItem.css';

interface NavItemProps {
  to: string;
  onNavItemClickHandler: () => void;
}

export const NavItem: FC<NavItemProps> = ({ children, to, onNavItemClickHandler }) => {
  return (
    <NavLink to={to} className="nav-item" activeClassName="active" onClick={onNavItemClickHandler} exact>
      {children}
    </NavLink>
  );
};
