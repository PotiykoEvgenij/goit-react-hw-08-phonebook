import React from 'react'
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

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
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name'/>
                <input type='email' name='email'/>
                <input type='password' name='password'/>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
};
