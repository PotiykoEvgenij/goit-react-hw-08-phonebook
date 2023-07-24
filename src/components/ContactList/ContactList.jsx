import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/OperationsContact';
import { getFilteredContacts } from 'redux/selectors';
import { Box, UnorderedList, ListItem, Button, Text } from "@chakra-ui/react";


export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
    
  return (
    <Box p="1rem" maxW="500px" m="0 auto">
      <UnorderedList listStyleType="none" px="0">
        {contacts.map((contact) => (
          <ListItem key={contact.id} bg="#f2f2f2" my="1" borderRadius="4px" display="flex" alignItems="center" justifyContent="space-between" marginBottom="1rem">
            <Text marginLeft="1rem" color="blue.600">{contact.name}: {contact.number}</Text>
            <Button onClick={() => handleDelete(contact.id)} colorScheme="red" size="sm">
              &#10060;
            </Button>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   handleDeleteContact: PropTypes.func.isRequired,
// };