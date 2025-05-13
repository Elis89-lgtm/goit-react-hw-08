import s from "./ModalConfirmDelete.module.css";

const ModalConfirmDelete = ({ isOpen, onClose, onConfirm, contactName }) => {
  if (!isOpen) return null;

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <h3>Confirm Deletion</h3>
        <p>Are you sure you want to delete "{contactName}"?</p>
        <div className={s.buttons}>
          <button onClick={onConfirm} className={s.confirmBtn}>
            Yes
          </button>
          <button onClick={onClose} className={s.cancelBtn}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmDelete;
