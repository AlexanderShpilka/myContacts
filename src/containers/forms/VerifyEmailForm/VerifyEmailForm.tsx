import { useDispatch, useSelector } from 'react-redux';

import { FormContainer } from 'components/utility';
import { Button } from 'components/Button/Button';

import { selectAuthState, verifyEmail } from 'store/slices/authSlice';
import './VerifyEmailForm.css';

export const VerifyEmailForm = () => {
  const { loading, error, verificationSuccess } = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return (
    <FormContainer
      title="Verify e-mail"
      error={typeof error === 'string' ? error : ''}
      success={verificationSuccess ? 'Message sent successfully' : ''}
    >
      <p className="verify-email-text">
        Verification email was successfully sent. After you've verified email, please sign in to get the most out of our
        application.
      </p>
      <p className="verify-email-text">
        If you see no email please check your spam. Still have no email? Try resending verification email.
      </p>

      <div className="verify-email-button-wrapper">
        <Button
          type="button"
          variant="primary"
          stretch
          disabled={loading}
          onClickHandler={() => dispatch(verifyEmail())}
        >
          {loading ? 'Sending e-mail...' : 'Re-send e-mail'}
        </Button>
      </div>
    </FormContainer>
  );
};
