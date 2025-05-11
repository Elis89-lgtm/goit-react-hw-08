import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations.js";
import {
  selectContacts,
  selectIsError,
  selectIsLoading,
} from "../../redux/contacts/selectors.js";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      toast.error("Plz reload page!");
    }
  }, [isError]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Loading contacts...</p>}

      {!isLoading && contacts.length === 0 && (
        <p>No contacts found. Please add some!</p>
      )}

      {!isLoading && contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default ContactsPage;
