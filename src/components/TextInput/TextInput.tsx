import { useField, FieldHookConfig } from 'formik';

import './TextInput.css';

export const TextInput = (props: FieldHookConfig<string>) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);

  const errorClassName = meta.touched && meta.error ? 'text-input-error text-input-error--show' : 'text-input-error';

  return (
    <div className="text-input-wrapper">
      <input className="text-input" {...field} placeholder={props.placeholder} type={props.type} />
      <div className={errorClassName}>{meta.error}</div>
    </div>
  );
};
