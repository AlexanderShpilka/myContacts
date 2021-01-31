import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';

import { Backdrop } from 'components/utility';
import { Modal } from 'components/Modal/Modal';
import { TextInput } from 'components/TextInput/TextInput';
import { Button } from 'components/Button/Button';
import { FormikSelect } from 'components/FormikSelect/FormikSelect';

import { createContact, selectContactsState } from 'store/slices/contactsSlice';
import './AddContact.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  category: string;
  birthday: Date | null;
}

const contactSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is required')
    .min(2, 'First name is too short')
    .max(25, 'First name is too long'),
  lastName: Yup.string().min(2, 'Last name is too short').max(25, 'Last name is too long'),
  email: Yup.string().email('Invalid e-mail'),
  phone: Yup.string().required('Phone is required').min(9, 'Phone is too short'),
  category: Yup.string().oneOf(['friends', 'job', 'family', 'other'], 'Invalid category type'),
  birthday: Yup.date().nullable(),
});

interface AddContactProps {
  open: boolean;
  onClickHandler: () => void;
}

export const AddContact = ({ open, onClickHandler }: AddContactProps) => {
  const { loading, error } = useSelector(selectContactsState);

  const dispatch = useDispatch();

  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    category: 'other',
    birthday: null,
  };

  return (
    <>
      <Backdrop open={open} onClick={onClickHandler} />
      <Modal title="Add new contact" open={open} feedback={typeof error === 'string' ? error : ''}>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, actions) => {
            await dispatch(
              createContact(
                { ...values, birthday: values.birthday ? values.birthday.toISOString() : '' },
                onClickHandler,
              ),
            );
            actions.setSubmitting(false);
            actions.resetForm();
          }}
          validationSchema={contactSchema}
        >
          {({ values, setFieldValue, resetForm }) => (
            <Form>
              <TextInput type="text" name="firstName" placeholder="First name *" />
              <TextInput type="text" name="lastName" placeholder="Last name" />
              <TextInput type="email" name="email" placeholder="E-mail" />
              <TextInput type="text" name="phone" placeholder="Phone *" />
              <FormikSelect name="category" as="select">
                <option value="other">Other</option>
                <option value="family">Family</option>
                <option value="job">Job</option>
                <option value="friends">Friends</option>
              </FormikSelect>
              <div>
                <DatePicker
                  selected={values.birthday}
                  dateFormat="MMMM d, yyyy"
                  className="add-contact-birthday"
                  name="birthday"
                  onChange={(date) => setFieldValue('birthday', date)}
                  placeholderText="Birthday"
                  showYearDropdown
                  isClearable
                />
              </div>
              <div className="add-contact-buttons-wrapper">
                <div className="add-contact-create-button-wrapper">
                  <Button type="submit" variant="primary" stretch disabled={loading}>
                    Create
                  </Button>
                </div>
                <div className="add-contact-cancel-button-wrapper">
                  <Button
                    type="button"
                    variant="secondary"
                    stretch
                    onClickHandler={() => {
                      onClickHandler();
                      resetForm();
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};
