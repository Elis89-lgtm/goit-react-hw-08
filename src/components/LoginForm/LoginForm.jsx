import React from "react";
import { Field, Formik, Form } from "formik";
import { useDispatch } from "react-redux";

import { login } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, action) => {
    dispatch(login(values));
    action.resetForm();
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
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
