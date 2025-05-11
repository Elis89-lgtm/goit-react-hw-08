import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={s.form} autoComplete="off">
        <label className={s.label}>
          Name
          <Field type="text" name="name" className={s.contactFormField} />
        </label>
        <label className={s.label}>
          Email
          <Field type="email" name="email" className={s.contactFormField} />
        </label>
        <label className={s.label}>
          Password
          <Field
            type="password"
            name="password"
            className={s.contactFormField}
          />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
