import { FC } from 'react';

import './DesktopNavMenu.css';

export const DesktopNavMenu: FC = ({ children }) => {
  return <div className="desktop-menu">{children}</div>;
};
