import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

// const contactsInitialState = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const initialState = {
        contactItems: [],
        isLoading: false,
        error: null,
        operation: "",
}
    
// const handlePending = state => {
//   state.isLoading = true;
//   // state.operation = "add";
// };
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.operation = "";
  state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',

    initialState,

    extraReducers: {
      // fetching contacts
    [fetchContacts.pending](state) {
        state.isLoading = true;
        state.operation = "fetch";
    },
    [fetchContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.operation = "";
        state.error = null;
        state.contactItems = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    
       // adding contact
      [addContact.pending](state) {
        state.isLoading = true;
        state.operation = "add";
    },
    [addContact.fulfilled](state, action) {
        state.isLoading = false;
        state.operation = "";
        state.error = null;
        state.contactItems.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    
       // deleting contact
    [deleteContact.pending](state, action) {
        state.isLoading = true;
        state.operation = `${action.meta.arg}`;
    },
    [deleteContact.fulfilled](state, action) {
        state.isLoading = false;
        state.operation = "";
        state.error = null;
        const index = state.contactItems.findIndex(contact => contact.id === action.payload.id);        
        state.contactItems.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
})


export const contactsReducer = contactsSlice.reducer;