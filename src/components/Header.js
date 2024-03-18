import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={styles.header}>
            <h1 style={styles.logo}>James Hunt</h1>
            <nav style={styles.nav}>
                <ul style={styles.navList}>
                    <li style={styles.navItem}>
                        <Link to="/" style={styles.navLink}>Home</Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link to="/about" style={styles.navLink}>About</Link>
                    </li>
                    {/* Add more navigation links as needed */}
                </ul>
            </nav>
        </header>
    );
}

// You can extract and modify these styles as needed
const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        backgroundColor: '#333',
        color: '#fff',
    },
    logo: {
        margin: 0,
    },
    nav: {
        // Add your styles here
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
    },
    navItem: {
        marginLeft: '20px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        // Add ':hover' state styles here
    },
};

export default Header;
