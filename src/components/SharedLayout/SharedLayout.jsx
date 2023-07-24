import { useAuth } from 'hooks';
import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logOut } from 'redux/auth/authOperations';
import { Box, Flex, Container, Link, Heading, Button } from "@chakra-ui/react";

export const SharedLayout = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const { isLoggedIn } = useAuth();

    const handleLogOut = () => {
        dispatch(logOut());
    };

    return (
        <Box>
            <Box bg="#f0f0f0" py="1rem">
                <Container maxW="100%">
                    <Flex justify="space-between" align="center">
                        <Flex>
                            <Link as={NavLink} to="/" color="blue" fontSize="16px" marginRight="10px" textDecoration="none">
                                Home
                            </Link>
                            {isLoggedIn && (
                                <Link as={NavLink} to="/contact" color="blue" fontSize="16px" marginRight="10px" textDecoration="none">
                                    Contacts
                                </Link>
                            )}
                        </Flex>
                        <Flex>
                            {isLoggedIn ? (
                                <>
                                    <Heading as="h2" size="lg" mr="1rem">
                                        Welcome, {user.name}
                                    </Heading>
                                    <Button colorScheme="blue" onClick={handleLogOut}>
                                        Logout
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Link as={NavLink} to="/login" color="blue" fontSize="16px" marginRight="10px" textDecoration="none">
                                        Login
                                    </Link>
                                    <Link as={NavLink} to="/register" color="blue" fontSize="16px" textDecoration="none">
                                        Register
                                    </Link>
                                </>
                            )}
                        </Flex>
                    </Flex>
                </Container>
            </Box>
            <Box pt="2rem">
                <Outlet />
            </Box>
        </Box>
    )
};
