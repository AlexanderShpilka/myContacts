import { SignInForm } from 'containers/forms/SignInForm/SignInForm';

import { useAuthCleanUp } from 'customHooks/useAuthCleanUp';
import './SignIn.css';

export const SignIn = () => {
  useAuthCleanUp();

  return (
    <div className="signin-wrapper">
      <SignInForm />
    </div>
  );
};
