import { ContactsFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/OperationsContact';
import { Box, Heading } from "@chakra-ui/react";

export default function Contact() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <Box textAlign="center" p="2rem">
      <Heading as="h1" size="xl" mb="2rem" color="blue.500">
        Phonebook
      </Heading>
      <ContactForm />
      <Heading as="h2" size="lg" mt="2rem" mb="1rem">
        Contacts
      </Heading>
      <ContactsFilter />
      <ContactList />
    </Box>
  );
};
