import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, { payload }) {
      return { ...state, items: [...state.items, payload] };
    },
    deleteContact(state, { payload }) {
      return {
        ...state,
        items: state.items.filter(el => el.id !== payload),
      };
    },

    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { setFilter, deleteContact, addContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
