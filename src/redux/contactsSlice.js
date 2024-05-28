import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    items: [],
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            const newContact = { ...action.payload, id: uuidv4() };
            state.items.push(newContact);
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

// Екшени слайса для використання в dispatch
export const { addContact, deleteContact } = contactsSlice.actions;

// Функції-селектори для використання в useSelector
export const selectContacts = (state) => state.contacts.items;

// Експортуємо редюсер слайса
export default contactsSlice.reducer;