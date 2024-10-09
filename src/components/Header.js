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
                    <li className="navItem"><Link to="/algorithmic-trading">Algorithmic Trading IPYNB 1</Link></li>
                    <li className="navItem"><Link to="/algorithmic-trading-2">Algorithmic Trading IPYNB 2</Link></li>
                    {/* Add more navigation links as needed */}
                </ul>
            </nav>
        </header>
    );
}



export default Header;
