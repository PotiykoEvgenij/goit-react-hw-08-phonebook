import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./ContactSlice";
import filterReducer from "./Contacts/filterSlice";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import authReducer from 'redux/auth/authSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const rootReducer = combineReducers({
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist:  ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// const persistor = persistStore(store);

export const persistor = persistStore(store);

// export { store, persistor };