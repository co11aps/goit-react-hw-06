import { createSlice } from "@reduxjs/toolkit";
import initialContactList from "../components/contacts.json";

const initialContacts = {
  contacts: {
    items: initialContactList,
  },
};

const contactsSlice = createSlice({
  name: "contacts/items",
  initialState: initialContacts,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.contacts.items;
