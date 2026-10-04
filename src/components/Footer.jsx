import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client } from '../client';

const Footer = () => {
    const year = new Date().getFullYear();
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        client.fetch('*[_type == "siteSettings"][0]').then(setSettings);
    }, []);

    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-logo">
                    ASHUTOSH <span>PATHAK</span>
                </div>

                <div className="social-links">
                    {settings?.linkedinUrl && (
                        <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    )}
                    {settings?.githubUrl && (
                        <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                    )}
                    {settings?.leetcodeUrl && (
                        <a href={settings.leetcodeUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LeetCode">
                            <i className="fas fa-code"></i>
                        </a>
                    )}
                    {settings?.instagramUrl && (
                        <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                    )}
                    {settings?.whatsappUrl && (
                        <a href={settings.whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    )}
                    {settings?.email && (
                        <a href={`mailto:${settings.email}`} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Email">
                            <i className="fas fa-envelope"></i>
                        </a>
                    )}
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
