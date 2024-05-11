import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="copyright">© 2024 Your Company</div>
            <nav>
                <ul>
                    <li><a href="#terms">Terms of Service</a></li>
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
