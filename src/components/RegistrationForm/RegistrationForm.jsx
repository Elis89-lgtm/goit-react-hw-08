import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, action) => {
    const resultAction = await dispatch(register(values));

    if (register.fulfilled.match(resultAction)) {
      action.resetForm();
      navigate("/contacts");
    } else {
      console.error("Registration error:", resultAction.payload);
    }
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
        <button className={s.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
