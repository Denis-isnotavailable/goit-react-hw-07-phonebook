import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.contactItems;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectOperation = state => state.contacts.operation;

export const selectFilter = state => state.filter;

// export const selectFilteredContacts = state => {
//     const contacts = selectContacts(state);
//     const filter = selectFilter(state);

//     return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
// }

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter], (contacts, filter) => {        
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    }
);