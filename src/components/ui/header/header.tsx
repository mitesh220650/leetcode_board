import React from 'react';
import './header.css';
import logo from './'
const Header: React.FC = () => {
    return (
        <header className="site-header">
            <div className="logo">Your Logo</div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
