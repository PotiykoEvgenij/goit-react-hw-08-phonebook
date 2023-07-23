import { ContactsFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/OperationsContact';
// import { selectContacts, selectIsLoading } from 'redux/selectors';
// import { fetchContacts } from 'redux/ContactSlice';
// import { selectContacts } from 'redux/selectors';

export default function Contact() {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactsFilter />
      <ContactList />
    </div>
  );
};
