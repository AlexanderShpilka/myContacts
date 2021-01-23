import { FC } from 'react';

import { HeaderContainer } from 'containers/Layout/HeaderContainer/HeaderContainer';
import { Container } from 'components/utility';

import './AppContainer.css';

export const AppContainer: FC = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <main className="main">
        <Container>{children}</Container>
      </main>
    </>
  );
};
