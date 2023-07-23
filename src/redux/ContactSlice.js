import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "./auth/authOperations";
import { fetchContacts, addContact, deleteContact } from "./OperationsContact";

const pendingReducer = state => {
    state.isLoading = true;
};

const rejectedReducer = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const fulfilledReducer = (state, action) => {
    state.isLoading = false;
    state.error = null;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      })
      .addMatcher(action => action.type.endsWith('/pending'), pendingReducer)
      .addMatcher(action => action.type.endsWith('/rejected'), rejectedReducer)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        fulfilledReducer
      );
  },
});

export const contactsReducer = contactsSlice.reducer;