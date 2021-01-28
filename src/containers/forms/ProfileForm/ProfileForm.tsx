import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { FormContainer } from 'components/utility';
import { TextInput } from 'components/TextInput/TextInput';
import { Button } from 'components/Button/Button';
import { DeleteAccount } from 'containers/modals/DeleteAccount/DeleteAccount';

import { selectAuthState, editProfile, cleanUp } from 'store/slices/authSlice';
import { RootState } from 'store/rootReducer';
import './ProfileForm.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string | '';
  confirmPassword: string | '';
}

const profileSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'First name is too short')
    .max(25, 'First name is too long'),
  lastName: Yup.string()
    .required('Last name is required')
    .min(2, 'Last name is too short')
    .max(25, 'Last name is too long'),
  email: Yup.string().email('Invalid e-mail').required('E-mail is required'),
  password: Yup.string().min(8, 'Password is too short'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password does not match'),
});

export const ProfileForm = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const {
    profile: { firstName, lastName, isLoaded },
    auth: { email },
  } = useSelector(({ firebase }: RootState) => firebase);
  const { error, loading, editProfileSuccess } = useSelector(selectAuthState);

  const dispatch = useDispatch();

  const initialValues: FormValues = { firstName, lastName, email: email || '', password: '', confirmPassword: '' };

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <FormContainer
        title="Edit Profile"
        error={typeof error === 'string' ? error : ''}
        success={editProfileSuccess ? 'Profile was successfully updated' : ''}
      >
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, actions) => {
            await dispatch(editProfile(values));
            actions.setSubmitting(false);
          }}
          validationSchema={profileSchema}
        >
          <Form>
            <TextInput type="text" name="firstName" placeholder="First name" />
            <TextInput type="text" name="lastName" placeholder="Last name" />
            <TextInput type="email" name="email" placeholder="E-mail" />
            <TextInput type="password" name="password" placeholder="Password" />
            <TextInput type="password" name="confirmPassword" placeholder="Confirm password" />
            <Button type="submit" variant="primary" stretch disabled={loading}>
              {loading ? 'Editing profile...' : 'Edit profile'}
            </Button>
            <div className="delete-button-wrapper">
              <Button type="button" variant="danger" onClickHandler={() => setModalOpen(true)}>
                Delete account
              </Button>
            </div>
          </Form>
        </Formik>
      </FormContainer>

      <DeleteAccount
        open={modalOpen}
        onClickHandler={() => {
          setModalOpen(false);
          dispatch(cleanUp());
        }}
      />
    </>
  );
};
