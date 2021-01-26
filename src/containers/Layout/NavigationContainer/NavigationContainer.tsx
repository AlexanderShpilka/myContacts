import { useSelector } from 'react-redux';

import { MobileNavMenu } from 'components/Navigation/MobileNavMenu/MobileNavMenu';
import { NavItem } from 'components/Navigation/NavItem/NavItem';
import { DesktopNavMenu } from 'components/Navigation/DesktopNavMenu/DesktopNavMenu';

import { RootState } from 'store/rootReducer';
import { ROUTES } from 'constants/routes';

interface NavigationContainerProps {
  isMobileMenuOpen: boolean;
  onNavItemClickHandler: () => void;
}

export const NavigationContainer = ({ isMobileMenuOpen, onNavItemClickHandler }: NavigationContainerProps) => {
  const {
    auth: { uid, emailVerified },
  } = useSelector(({ firebase }: RootState) => firebase);

  let menuItems;

  if (uid && !emailVerified) {
    menuItems = (
      <>
        <NavItem to={ROUTES.PROFILE} onNavItemClickHandler={onNavItemClickHandler}>
          Profile
        </NavItem>
        <NavItem to={ROUTES.SIGNOUT} onNavItemClickHandler={onNavItemClickHandler}>
          Sign Out
        </NavItem>
      </>
    );
  } else if (uid && emailVerified) {
    menuItems = (
      <>
        <NavItem to={ROUTES.CONTACTS} onNavItemClickHandler={onNavItemClickHandler}>
          Contacts
        </NavItem>
        <NavItem to={ROUTES.SIGNOUT} onNavItemClickHandler={onNavItemClickHandler}>
          Sign Out
        </NavItem>
      </>
    );
  } else {
    menuItems = (
      <>
        <NavItem to={ROUTES.SIGNIN} onNavItemClickHandler={onNavItemClickHandler}>
          Sign In
        </NavItem>
        <NavItem to={ROUTES.SIGNUP} onNavItemClickHandler={onNavItemClickHandler}>
          Sign Up
        </NavItem>
      </>
    );
  }

  return (
    <>
      <MobileNavMenu isMobileMenuOpen={isMobileMenuOpen}>{menuItems}</MobileNavMenu>
      <DesktopNavMenu>{menuItems}</DesktopNavMenu>
    </>
  );
};
