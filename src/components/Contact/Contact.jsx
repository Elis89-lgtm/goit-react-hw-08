import { PiUser, PiPhone } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import s from "./Contact.module.css";
import ModalEditContact from "../ModalEditContact/ModalEditContact";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleSaveContact = (updatedContact) => {
    dispatch(editContact(updatedContact));
  };
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.card}>
      <div className={s.contactWrapper}>
        <p className={s.contactRow}>
          <PiUser size={24} />
          {name}
        </p>

        <p className={s.contactRow}>
          <PiPhone size={24} />
          {number}
        </p>
      </div>
      <div className={s.buttonGroup}>
        <button onClick={handleEdit} className={s.buttonEdit}>
          Edit
        </button>
        <button onClick={handleDelete} className={s.buttonDelete}>
          Delete
        </button>
      </div>
      <ModalEditContact
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveContact}
        contact={{ id, name, number }}
      />
    </li>
  );
};

export default Contact;
