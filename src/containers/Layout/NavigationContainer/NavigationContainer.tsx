import { MobileNavMenu } from 'components/Navigation/MobileNavMenu/MobileNavMenu';
import { NavItem } from 'components/Navigation/NavItem/NavItem';

interface NavigationContainerProps {
  isMobileMenuOpen: boolean;
  onNavItemClickHandler: () => void;
}

export const NavigationContainer = ({ isMobileMenuOpen, onNavItemClickHandler }: NavigationContainerProps) => {
  const menuItems = (
    <>
      <NavItem to="/signin" onNavItemClickHandler={onNavItemClickHandler}>
        Sign In
      </NavItem>
      <NavItem to="/signup" onNavItemClickHandler={onNavItemClickHandler}>
        Sign Up
      </NavItem>
      <NavItem to="/about" onNavItemClickHandler={onNavItemClickHandler}>
        About
      </NavItem>
    </>
  );

  return (
    <>
      <MobileNavMenu isMobileMenuOpen={isMobileMenuOpen}>{menuItems}</MobileNavMenu>
      {/* <DesctopNavMenu /> pass nav items as children */}
    </>
  );
};
