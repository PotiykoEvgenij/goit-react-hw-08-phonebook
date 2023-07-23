import { useAuth } from 'hooks';
import React from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logOut } from 'redux/auth/authOperations';

// const pagesForAuthenticatedUser = [
//     { title: 'Home', path: '/' },
//     { title: 'Contact', path: '/contact' },
// ];

// const pagesForUnauthenticatedUser = [
//     { title: 'Home', path: '/' },
//     { title: 'Register', path: '/register' },
//     { title: 'Login', path: '/login' },
// ];

export const SharedLayout = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const { isLoggedIn } = useAuth();

    const handleLogOut = () => {
        dispatch(logOut());
    };

    return (
        <>
            <div>
                <NavLink to='/'>Home</NavLink>
                {isLoggedIn && <NavLink to = "/contact">Contacts</NavLink>}
            </div>
            <div>
                {isLoggedIn ? (
                    <>
                    <h1>Welcome, {user.name}</h1>
                    <button onClick={handleLogOut}>Logout</button>
                    </>
                ) : (
                    <>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                    </>
                )}
            </div>
            <Outlet />
        </>
    )
};
