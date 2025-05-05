import { PiUser, PiPhone } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import s from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

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
      <button onClick={() => dispatch(deleteContact(id))} className={s.button}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
