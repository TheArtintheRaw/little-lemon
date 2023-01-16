import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__links">
                <li className="navbar__link">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar__link">
                    <Link to="/menu">Menu</Link>
                </li>
                <li className="navbar__link">
                    <Link to="/reserve">Reserve a table</Link>
                </li>
                <li className="navbar__link">
                    <Link to="/order">Order Online</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;