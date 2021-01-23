import { FC } from 'react';

import { HeaderContainer } from 'containers/Layout/HeaderContainer/HeaderContainer';

export const AppContainer: FC = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      <main>{children}</main>
    </>
  );
};
