import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/Contacts/filterSlice';
import { selectFilteredName } from 'redux/selectors';
// import PropTypes from 'prop-types';
// import styles from './ContactFilter.module.css'
import { Box, Input, FormControl } from "@chakra-ui/react";

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilteredName);

  const handleSetFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };
    
  return (
    <Box w="500px" m="0 auto">
      <FormControl>
        {/* <FormLabel>Find contacts by name</FormLabel> */}
        <Input
          type="text"
          placeholder="Search contacts"
          value={filter}
          onChange={handleSetFilter}
        />
      </FormControl>
    </Box>
  );
};

// ContactsFilter.propTypes = {
//   setFilter: PropTypes.func.isRequired,
// };