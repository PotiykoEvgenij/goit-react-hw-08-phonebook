import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/authOperations";
import { Box, Input, Button } from "@chakra-ui/react";


export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };
    return (
        <Box w="300px" m="0 auto">
            <form onSubmit={handleSubmit}>
                <Input type='email' name='email' placeholder="Email" mb="1rem" />
                <Input type='password' name='password' placeholder="Password" mb="1rem" />
                <Button type='submit' colorScheme="blue">Login</Button>
            </form>
        </Box>
    )
};