import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

import { SignUp } from 'pages/auth/SignUp/SignUp';
import { AppContainer } from 'containers/layout/AppContainer/AppContainer';
import { VerifyEmail } from 'pages/auth/VerifyEmail/VerifyEmail';
import { Contacts } from 'pages/contacts/Contacts/Contacts';
import { Profile } from 'pages/auth/Profile/Profile';
import { SignIn } from 'pages/auth/SignIn/SignIn';
import { SignOut } from 'pages/auth/SignOut/SignOut';
import { Loader } from 'components/utility';

import { ROUTES } from 'constants/routes';
import { RootState } from 'store/rootReducer';

export const App = () => {
  const { auth } = useSelector(({ firebase }: RootState) => firebase);
  const { uid, emailVerified } = auth;

  if (!isLoaded(auth)) {
    return <Loader />;
  }

  let routes;

  if (uid && !emailVerified) {
    routes = (
      <Switch>
        <Route path={ROUTES.VERIFY_EMAIL} exact component={VerifyEmail} />
        <Route path={ROUTES.PROFILE} exact component={Profile} />
        <Route path={ROUTES.SIGNOUT} exact component={SignOut} />
        <Redirect to={ROUTES.VERIFY_EMAIL} />
      </Switch>
    );
  } else if (uid && emailVerified) {
    routes = (
      <Switch>
        <Route path={ROUTES.CONTACTS} exact component={Contacts} />
        <Route path={ROUTES.PROFILE} exact component={Profile} />
        <Route path={ROUTES.SIGNOUT} exact component={SignOut} />
        <Redirect to={ROUTES.CONTACTS} />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path={ROUTES.SIGNIN} exact component={SignIn} />
        <Route path={ROUTES.SIGNUP} exact component={SignUp} />
        <Redirect to={ROUTES.SIGNIN} />
      </Switch>
    );
  }

  return <AppContainer>{routes}</AppContainer>;
};
