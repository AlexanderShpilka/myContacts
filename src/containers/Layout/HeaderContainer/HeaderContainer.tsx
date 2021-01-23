import { useState } from 'react';

import { Header } from 'components/Header/Header';
import { Container } from 'components/utility';
import { NavigationContainer } from 'containers/Layout/NavigationContainer/NavigationContainer';
import { Logo } from 'components/Logo/Logo';
import { Humburger } from 'components/Humburger/Humburger';

import './HeaderContainer.css';

export const HeaderContainer = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Header>
      <Container>
        <div className="header-inner">
          <Logo height="4rem" />
          <NavigationContainer
            isMobileMenuOpen={isMobileMenuOpen}
            onNavItemClickHandler={() => setIsMobileMenuOpen(false)}
          />
          <Humburger
            isOpen={isMobileMenuOpen}
            onClickHandler={() => setIsMobileMenuOpen((currentState) => !currentState)}
          />
        </div>
      </Container>
    </Header>
  );
};
