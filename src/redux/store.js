import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./ContactSlice";
import filterReducer from "./Contacts/filterSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import authReducer from 'redux/auth/authSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };