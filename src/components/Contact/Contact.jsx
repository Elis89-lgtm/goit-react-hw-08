import { PiUser, PiPhone } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact, editContacts } from "../../redux/contacts/operations";
import s from "./Contact.module.css";
import ModalEditContact from "../ModalEditContact/ModalEditContact";
import ModalConfirmDelete from "../ModalConfirmDelete/ModalConfirmDelete";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditModalOpen = () => {
    setIsEditModalOpen(true);
  };
  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
  };

  const handleDeleteModalOpen = () => {
    setIsDeleteModalOpen(true);
  };
  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };
  const handleSaveChanges = (updatedContact) => {
    dispatch(editContacts({ id: contact.id, ...updatedContact }));
    handleEditModalClose();
  };
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    handleDeleteModalClose();
  };

  return (
    <>
      <div className={s.contactWrapper}>
        <p className={s.contactRow}>
          <PiUser size={24} />
          {contact.name}
        </p>

        <p className={s.contactRow}>
          <PiPhone size={24} />
          {contact.number}
        </p>
      </div>
      <div className={s.buttonContainer}>
        <button
          onClick={handleEditModalOpen}
          type="button"
          className={s.buttonEdit}
        >
          Edit
        </button>
        <button
          onClick={handleDeleteModalOpen}
          type="button"
          className={s.buttonDelete}
        >
          Delete
        </button>
      </div>

      {isEditModalOpen && (
        <ModalEditContact
          isOpen={isEditModalOpen}
          onClose={handleEditModalClose}
          onSave={handleSaveChanges}
          contact={contact}
        />
      )}
      {isDeleteModalOpen && (
        <ModalConfirmDelete
          isOpen={isDeleteModalOpen}
          onClose={handleDeleteModalClose}
          onConfirm={handleDelete}
          contactName={contact.name}
        />
      )}
    </>
  );
};

export default Contact;
