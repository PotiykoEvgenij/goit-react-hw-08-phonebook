import React from 'react'
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Box, Input, Button } from "@chakra-ui/react";

export const Register = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        dispatch(register({ name, email, password }));
    };

    return (
        <Box w="300px" m="0 auto">
            <form onSubmit={handleSubmit}>
                <Input type='text' name='name' placeholder="Name" mb="1rem" />
                <Input type='email' name='email' placeholder="Email" mb="1rem" />
                <Input type='password' name='password' placeholder="Password" mb="1rem" />
                <Button type='submit' colorScheme="blue">Register</Button>
            </form>
        </Box>
    )
};
