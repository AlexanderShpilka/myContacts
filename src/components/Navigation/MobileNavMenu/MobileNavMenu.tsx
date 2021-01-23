import { FC } from 'react';

import './MobileNavMenu.css';

interface MobileNavMenuProps {
  isMobileMenuOpen: boolean;
}

export const MobileNavMenu: FC<MobileNavMenuProps> = ({ children, isMobileMenuOpen }) => {
  const mobileMenuClassName = isMobileMenuOpen ? 'mobile-menu mobile-menu--open' : 'mobile-menu';

  return <div className={mobileMenuClassName}>{children}</div>;
};
