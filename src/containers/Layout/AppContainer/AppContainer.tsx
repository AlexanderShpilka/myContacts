import { FC } from 'react';

import { NavigationContainer } from 'containers/Layout/NavigationContainer/NavigationContainer';
import { HeaderContainer } from 'containers/Layout/HeaderContainer/HeaderContainer';

export const AppContainer: FC = ({ children }) => {
  return (
    <>
      <HeaderContainer>
        {/* <Logo /> */}
        <NavigationContainer />
        {/* <Humburger /> */}
      </HeaderContainer>
      <main>{children}</main>
    </>
  );
};
