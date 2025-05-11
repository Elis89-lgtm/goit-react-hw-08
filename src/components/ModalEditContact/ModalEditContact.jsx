import React from "react";
import { useState } from "react";
import s from "./ModalEditContact.module.css";
import { Form } from "formik";

const InputField = ({ id, label, value, onChange }) => {
  return (
    <div className={s.modalInputWrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        className={s.modalInput}
      />
    </div>
  );
};

const ModalEditContact = ({ isOpen, onClose, onSave, contact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleClose = () => {
    onClose();
    setName(contact.name);
    setNumber(contact.number);
  };
  const handleSave = () => {
    console.log("Saving contact:", { ...contact, name, number });
    onSave({ ...contact, name, number });
    onClose();
  };
  if (!isOpen) return null;

  return (
    <div className={s.modal}>
      <div className={s.modalContent}>
        <h2>Edit Contact</h2>
        <Form>
          <InputField
            id="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            id="number"
            label="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </Form>
        <div className={s.modalButtons}>
          <button type="button" onClick={handleSave} className={s.modalBtnSave}>
            Save
          </button>
          <button
            type="button"
            onClick={handleClose}
            className={s.modalBtnCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEditContact;
