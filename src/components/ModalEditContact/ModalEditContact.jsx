import { useState } from "react";
import s from "./ModalEditContact.module.css";

const ModalEditContact = ({ isOpen, onClose, onSave, contact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleSave = () => {
    onSave({ name, number });
  };

  return (
    isOpen && (
      <div className={s.overlay}>
        <div className={s.modal}>
          <h3>Edit Contact</h3>
          <label className={s.label}>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={s.input}
            />
          </label>
          <label className={s.label}>
            Number:
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className={s.input}
            />
          </label>
          <div className={s.buttons}>
            <button onClick={handleSave} className={s.saveBtn}>
              Save
            </button>
            <button onClick={onClose} className={s.cancelBtn}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalEditContact;
