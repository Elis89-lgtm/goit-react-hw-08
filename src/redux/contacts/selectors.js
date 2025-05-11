import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectIsError = (state) => state.contacts.error;
export const selectFiltredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) return contacts;
    const isNumberFilter = /^\d+$/.test(filter);

    const normalizedFilter = filter.replace(/\D/g, "");

    return contacts.filter((contact) => {
      const normalizedNumber = contact.number.replace(/\D/g, "");

      const isNameMatch =
        !isNumberFilter &&
        contact.name.toLowerCase().includes(filter.toLowerCase());

      const isNumberMatch = isNumberFilter
        ? normalizedNumber.includes(normalizedFilter)
        : false;

      return isNameMatch || isNumberMatch;
    });
  }
);
