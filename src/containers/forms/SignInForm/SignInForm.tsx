import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { FormContainer } from 'components/utility';
import { TextInput } from 'components/TextInput/TextInput';
import { Button } from 'components/Button/Button';

import { selectAuthState, signIn } from 'store/slices/authSlice';

interface FormValues {
  email: string;
  password: string;
}

const signInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid e-mail').required('E-mail is required'),
  password: Yup.string().required('Password is required').min(8, 'Password is too short'),
});

export const SignInForm = () => {
  const { loading, error } = useSelector(selectAuthState);

  const dispatch = useDispatch();

  const initialValues: FormValues = { email: '', password: '' };

  return (
    <FormContainer title="Signin" error={typeof error === 'string' ? error : ''}>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          await dispatch(signIn(values));
          actions.setSubmitting(false);
        }}
        validationSchema={signInSchema}
      >
        <Form>
          <TextInput type="email" name="email" placeholder="E-mail" />
          <TextInput type="password" name="password" placeholder="Password" />
          <Button type="submit" variant="primary" stretch disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};
