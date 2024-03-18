import React from 'react';

function Footer() {
    return (
        <footer style={styles.footer}>
            <p>James Hunt © 2024</p>
            <p>Email: james.hunt@duke.edu</p>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
};

export default Footer;
