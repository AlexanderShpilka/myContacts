import { useField, FieldHookConfig } from 'formik';

import './FormikSelect.css';

export const FormikSelect = (props: FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  const errorClassName =
    meta.touched && meta.error ? 'formik-select-error formik-select-error--show' : 'formik-select-error';

  return (
    <div className="formik-select-wrapper">
      <select className="formik-select" {...field} children={props.children} />
      <div className={errorClassName}>{meta.error}</div>
    </div>
  );
};
