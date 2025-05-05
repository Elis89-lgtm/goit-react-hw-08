import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchBox />
      <div className="contact-list-wrapper">
        <ContactList />
      </div>
    </div>
  );
};
export default App;
