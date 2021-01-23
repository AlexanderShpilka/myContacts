import { Route, Switch } from 'react-router-dom';

import { SignUp } from 'pages/auth/SignUp/SignUp';
import { AppContainer } from 'containers/layout/AppContainer/AppContainer';

import { ROUTES } from 'constants/routes';

export const App = () => {
  const routes = (
    <Switch>
      <Route path={ROUTES.SIGNUP} exact component={SignUp} />
    </Switch>
  );

  return <AppContainer>{routes}</AppContainer>;
};
