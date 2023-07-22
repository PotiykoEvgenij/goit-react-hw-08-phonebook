import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
// import { ContactForm } from "./ContactForm/ContactForm";
// import { ContactList } from "./ContactList/ContactList";
// import { ContactsFilter } from "./ContactFilter/ContactFilter";
// import { addContact, deleteContact, fetchContacts } from "redux/ContactSlice";
// import { fetchContacts } from "redux/ContactSlice";
// import { selectContacts, selectFilteredName } from "../redux/selectors";
// import { setFilter } from "../redux/Contacts/filterSlice";
// import { getFilteredContacts } from "../redux/selectors";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import Home from 'pages/Home';
import { Register } from "pages/Register";
import { Login } from "pages/Login";
import Contact from "pages/Contact";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
// import { selectIsLoggedIn } from "redux/auth/authSelectors";
import { refreshUser } from "redux/auth/authOperations";
import { useAuth } from "hooks";

export const App = () => {  
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // const isLoggedIn = useSelector(selectIsLoggedIn)
  // const contacts = useSelector(getFilteredContacts);
  // const filter = useSelector(selectFilteredName);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // const handleAddContact = async (contact) => {
  //   try {
  //     await dispatch(addContact(contact));
  //   } catch (error) {
  //     console.log("Error adding contact:", error);
  //   }
  // };

  // const handleDeleteContact = async (contactId) => {
  //   try {
  //     await dispatch(deleteContact(contactId));
  //   } catch (error) {
  //     console.log("Error deleting contact:", error);
  //   }
  // };

  return isRefreshing ? (
      <h1>Loading...</h1>
     ) :  (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='/register' element={<RestrictedRoute redirectTo="/contact" component={<Register />} />} />
        <Route path='/login' element={<RestrictedRoute redirectTo="/contact" component={<Login />} />} />
        <Route path='/contact' element={<PrivateRoute redirectTo="/login" component={<Contact />} />} />
      </Route>
    </Routes>
  );
};
