import './SignUp.css';

import { SignUpForm } from 'containers/forms/SignUpForm/SignUpForm';
import { useAuthCleanUp } from 'customHooks/useAuthCleanUp';

export const SignUp = () => {
  useAuthCleanUp();

  return (
    <div className="signup-wrapper">
      <SignUpForm />
    </div>
  );
};
