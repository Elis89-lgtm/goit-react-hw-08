import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global";

const checkAuthToken = (thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  if (!token) {
    toast.error("Authorization required");
    return thunkAPI.rejectWithValue("No token");
  }
  return token;
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const token = checkAuthToken(thunkAPI);
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    // const token = thunkAPI.getState().auth.token;
    // if (!token) return thunkAPI.rejectWithValue("No token");
    // setAuthHeader(token);
    try {
      const token = checkAuthToken(thunkAPI);
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      const response = await axios.post("/contacts", newContact);
      toast.success("Contact added");
      return response.data;
    } catch (error) {
      toast.error("Failed to add contact");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    // const token = thunkAPI.getState().auth.token;
    // if (!token) return thunkAPI.rejectWithValue("No token");
    // setAuthHeader(token);

    try {
      const token = checkAuthToken(thunkAPI);
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      await axios.delete(`/contacts/${id}`);
      toast.success("Contact deleted");
      return id;
    } catch (error) {
      toast.error("Failed to delete contact");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContacts = createAsyncThunk(
  "contacts/editContact",
  async ({ id, name, number }, thunkAPI) => {
    // const token = thunkAPI.getState().auth.token;
    // if (!token) return thunkAPI.rejectWithValue("No token");
    // axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      const token = checkAuthToken(thunkAPI);
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      const response = await axios.patch(`/contacts/${id}`, { name, number });
      toast.success("Contact updated");
      return response.data;
    } catch (error) {
      toast.error("Failed to update contact");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
