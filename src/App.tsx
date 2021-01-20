import { Route, Switch } from 'react-router-dom';

import { SignUp } from 'pages/auth/SignUp/SignUp';
import { Layout } from 'containers/Layout/Layout';

import { ROUTES } from 'constants/routes';

export const App = () => {
  const routes = (
    <Switch>
      <Route path={ROUTES.SIGNUP} exact component={SignUp} />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
};
