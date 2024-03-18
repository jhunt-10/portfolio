import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
    return (
        <header className="header">
            <h1 className="logo">James Hunt</h1>
            <nav className="nav">
                <ul className="navList">
                    <li className="navItem">
                        <Link to="/" className="navLink">Home</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/about" className="navLink">About</Link>
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </nav>
        </header>
    );
}



export default Header;
