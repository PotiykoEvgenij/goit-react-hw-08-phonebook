import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectFilteredName = (state) => state.filter;

export const getFilteredContacts = createSelector(
    [selectContacts, selectFilteredName],
    (contacts, filter) => {
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);
