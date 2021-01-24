import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { FormContainer } from 'components/utility';
import { TextInput } from 'components/TextInput/TextInput';
import { Button } from 'components/Button/Button';

import { selectAuthState, signUp } from 'store/slices/authSlice';
import './SignUpForm.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'First name is too short')
    .max(25, 'First name is too long'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Last name is too short')
    .max(25, 'Last name is too long'),
  email: Yup.string().email('Invalid e-mail').required('E-mail is required'),
  password: Yup.string().required('Password is required').min(8, 'Password is too short'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password does not match')
    .required('You need to confirm the password'),
});

export const SignUpForm = () => {
  const { loading, error } = useSelector(selectAuthState);

  const dispatch = useDispatch();

  const initialValues: FormValues = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

  return (
    <FormContainer title="Signup" error={typeof error === 'string' ? error : ''}>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          await dispatch(signUp(values));
          actions.setSubmitting(false);
        }}
        validationSchema={signUpSchema}
      >
        <Form>
          <TextInput type="text" name="firstName" placeholder="First name" />
          <TextInput type="text" name="lastName" placeholder="Last name" />
          <TextInput type="email" name="email" placeholder="E-mail" />
          <TextInput type="password" name="password" placeholder="Password" />
          <TextInput type="password" name="confirmPassword" placeholder="Confirm password" />
          <Button type="submit" variant="primary" stretch disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};
