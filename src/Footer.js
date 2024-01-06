import React from 'react';
import './style.css'

const Footer = () => {
    return (
        <footer>
            <p>Следите за нами в социальных сетях:</p>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </footer>
    );
}

export default Footer;