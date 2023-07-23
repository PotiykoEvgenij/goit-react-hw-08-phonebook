import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./authOperations";
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
    user: { name: null,  email: null },
    token: null,
    error: null,
    isLoggedIn: false,
    isLoading: false,
    isRefreshing: true,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
        extraReducers: (builder) => {
            builder
      .addCase(register.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});
    
// const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

// export default authReducer = authSlice.reducer;

export default authSlice.reducer;