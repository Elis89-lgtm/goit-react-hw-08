import axios from "axios";

export const API_URL = "https://6816344332debfe95dbdbe7a.mockapi.io/Contacts";

export const fetchContacts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addContact = async (contact) => {
  const response = await axios.post(API_URL, contact);
  return response.data;
};

export const deleteContact = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
