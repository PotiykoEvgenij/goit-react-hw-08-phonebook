import { createSlice } from "@reduxjs/toolkit";
import { register } from "./authOperations";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['token'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//     reducer: persistedReducer,
// });

// const persistor = persistStore(store);

// export { store, persistor };

const initialState = {
    user: null,
    token: null,
    error: null,
    isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
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
    
// const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export default authSlice.reducer;