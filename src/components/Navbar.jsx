import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(prev => {
            document.body.style.overflow = prev ? '' : 'hidden';
            return !prev;
        });
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = '';
    };

    useEffect(() => { closeMenu(); }, [location]);

    const links = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/projects', label: 'Projects' },
        { to: '/blog', label: 'Blog' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src="/images/profile.jpg" alt="Ashutosh Pathak" className="logo-img" />
                    <div className="logo-text-container">
                        <span className="logo-text">ASHUTOSH</span>
                        <span className="logo-accent">PATHAK</span>
                    </div>
                </Link>

                <div className={`nav-menu ${isOpen ? 'active' : ''}`} id="navMenu">
                    {links.map(({ to, label }) => (
                        <Link
                            key={to}
                            to={to}
                            className={`nav-link ${location.pathname === to ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            {label}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className={`nav-link nav-cta ${location.pathname === '/contact' ? 'active' : ''}`}
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>
                </div>

                <button
                    className={`mobile-toggle ${isOpen ? 'active' : ''}`}
                    id="mobileToggle"
                    aria-label="Toggle navigation menu"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
