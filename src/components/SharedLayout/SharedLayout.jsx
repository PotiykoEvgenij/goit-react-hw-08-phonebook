import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const pages = [
    { title: 'Home', path: '/' },
    { title: 'Register', path: '/register' },
    { title: 'Login', path: '/login' },
    { title: 'Contact', path: '/contact' },

]

export const SharedLayout = () => {
    return (
        <div>
            <ul>
                {pages.map(({ title, path }) => {
                    return (
                        <li key={title}>
                            <NavLink to={path}>{title}</NavLink>
                        </li>
                    );
                })}
            </ul>
            <Outlet />
        </div>
    )
};
