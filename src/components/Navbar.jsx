import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = '';
    };

    // Close menu when route changes
    useEffect(() => {
        closeMenu();
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src="/images/profile.jpg" alt="Profile" className="logo-img" />
                    <div className="logo-text-container">
                        <span className="logo-text">ASHUTOSH</span>
                        <span className="logo-accent">PATHAK</span>
                    </div>
                </Link>

                <div className={`nav-menu ${isOpen ? 'active' : ''}`} id="navMenu">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                    <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
                    <Link to="/contact" className="nav-link nav-cta">Contact</Link>
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
