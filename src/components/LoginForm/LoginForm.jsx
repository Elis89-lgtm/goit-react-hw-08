import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (values, action) => {
    try {
      const resultAction = await dispatch(login(values));
      if (login.fulfilled.match(resultAction)) {
        navigate("/contacts");
      }
      action.resetForm();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={s.form} autoComplete="off">
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
        <button className={s.btn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
