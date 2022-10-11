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
}
    
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',

    initialState,

    extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.contactItems = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.contactItems.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        const index = state.contactItems.findIndex(contact => contact.id === action.payload);        
        state.contactItems.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
})


export const contactsReducer = contactsSlice.reducer;