import { VerifyEmailForm } from 'containers/forms/VerifyEmailForm/VerifyEmailForm';

import { useAuthCleanUp } from 'customHooks/useAuthCleanUp';
import './VerifyEmail.css';

export const VerifyEmail = () => {
  useAuthCleanUp();

  return (
    <div className="verify-email-wrapper">
      <VerifyEmailForm />
    </div>
  );
};
