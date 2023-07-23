import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./ContactSlice";
import filterReducer from "./Contacts/filterSlice";
import storage from 'redux-persist/lib/storage';
import authReducer from 'redux/auth/authSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
    key: 'auth',
    storage: storage,
    whitelist:  ['token'],
};

const reducers = combineReducers({
    auth: persistReducer(persistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
});

export const store = configureStore({
  reducer: reducers,
  contacts: contactsReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});



export const persistor = persistStore(store);