import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authOperations";

const initialState = {
    user: null,
    token: null,
    error: null,
    isLoading: false,
};

const authSlice = createSlice({
        name: 'auth',
        initialState,
        extraReducers: (builder) => {
            builder.addCase(register.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            }).addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoading = false;
            }).addCase(register.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
        },
    });

export default authSlice.reducer;