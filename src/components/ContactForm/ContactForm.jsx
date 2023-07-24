import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/OperationsContact';
import { Box, Input, Button } from "@chakra-ui/react";

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
      if (name.trim() === '' || number.trim() === '') {
      alert('Please enter name and number');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    
    dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <Box w="500px" m="0 auto">
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          name='name'
          placeholder="Name"
          mb="1rem"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type='tel'
          name='number'
          placeholder="Number"
          mb="1rem"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <Button type="submit" colorScheme="blue">
          Add Contact
        </Button>
      </form>
    </Box>
  );
};

// ContactForm.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   addContact: PropTypes.func.isRequired,
// };