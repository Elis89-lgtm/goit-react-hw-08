import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

// Селектор контактів
export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectIsError = (state) => state.contacts.error;

// Фільтрований список контактів
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) return contacts;

    // Приведення фільтра до нижнього регістру
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) => {
      // Переведення імені в нижній регістр
      const normalizedName = contact.name.toLowerCase();

      // Переведення номера у формат без нецифрових символів
      const normalizedNumber = contact.number.replace(/\D/g, "");

      // Перевірка збігу імені або номера
      const isNameMatch = normalizedName.includes(normalizedFilter);
      const isNumberMatch = normalizedNumber.includes(normalizedFilter);

      return isNameMatch || isNumberMatch;
    });
  }
);
