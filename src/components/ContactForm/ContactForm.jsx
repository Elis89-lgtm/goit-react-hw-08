import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import s from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short Name!")
    .max(50, "Too Long Name!")
    .required("Required"),
  number: Yup.string()
    .min(2, "Too Short number!")
    .max(50, "Too Long number!")
    .required("Required"),
});
const initialValues = {
  name: "",
  number: "",
};
const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleAddContact = (values, actions) => {
    dispatch(addContact(values));

    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAddContact}
      validationSchema={ContactSchema}
    >
      <Form className={s.contactForm}>
        <label className={s.nameLabel} htmlFor={nameFieldId}>
          Name
        </label>
        <Field
          className={s.contField}
          type="text"
          name="name"
          id={nameFieldId}
        />
        <ErrorMessage name="name" component="span" className={s.error} />

        <label className={s.numberlabel} htmlFor={numberFieldId}>
          Number
        </label>
        <Field
          className={s.contField}
          type="tel"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage name="number" component="span" className={s.error} />

        <button className={s.addContactBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
