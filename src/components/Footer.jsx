import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date().getFullYear();


    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-logo">
                    ASHUTOSH <span>PATHAK</span>
                </div>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/its-ashutosh-pathak" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/its-ashutosh-pathak" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://leetcode.com/its-ashutosh-pathak/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LeetCode">
                        <i className="fas fa-code"></i>
                    </a>
                    <a href="https://www.instagram.com/its_ashutosh_pathak/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/919871852159" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ashutoshpathakab@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>

                <p className="footer-copy" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ color: '#fff' }}>Made with ❤️ while sipping ☕</span>
                    <div style={{ color: 'var(--text-muted)' }}>© {year} <span style={{ color: 'var(--accent)' }}>Ashutosh Pathak</span>. All Rights Reserved.</div>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
