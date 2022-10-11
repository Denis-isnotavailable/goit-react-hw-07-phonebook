import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://634457c5dcae733e8fdd3ee2.mockapi.io/api/v1";


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  
});


export const addContact = createAsyncThunk("contacts/addContact", async ({ name, number }, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", { name, number });
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${id}`);        
        return response.data;
        
    } catch (e) {        
        return thunkAPI.rejectWithValue(e.message);
    }
  }
);