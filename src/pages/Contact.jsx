import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const Contact = () => {
    const [showToast, setShowToast] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        formData.append('_subject', 'New Portfolio Inquiry');
        formData.append('_captcha', 'false');
        formData.append('_template', 'table');

        try {
            await fetch('https://formsubmit.co/ajax/ashutoshpathakab@gmail.com', {
                method: 'POST',
                body: formData,
            });
            setShowToast(true);
            e.target.reset();
            setTimeout(() => setShowToast(false), 3500);
        } catch (error) {
            alert('Something went wrong. Please reach out via email directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section className="contact-hero">
                <div className="container">
                    <span className="section-tag"><i className="fas fa-paper-plane"></i> Contact</span>
                    <h1 className="section-title">Let's build something<br />meaningful together.</h1>
                    <p className="section-subtitle">
                        Open to collaborations, freelance work, internships, and meaningful conversations
                        where ideas turn into real systems.
                    </p>

                    <div className="contact-grid">
                        {/* ── Info Column ── */}
                        <div className="contact-info">
                            <h3>Get in touch</h3>
                            <p>I typically respond within 24 hours. Drop a message or reach out directly.</p>

                            <div className="contact-methods">
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ashutoshpathakab@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-method" id="contactEmail">
                                    <i className="fas fa-envelope"></i>
                                    <div>
                                        <h4>Email</h4>
                                        <p>ashutoshpathakab@gmail.com</p>
                                    </div>
                                </a>
                                <a href="tel:+919871852159" className="contact-method" id="contactPhone">
                                    <i className="fas fa-phone"></i>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+91 98718 52159</p>
                                    </div>
                                </a>
                                <div className="contact-method">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div>
                                        <h4>Location</h4>
                                        <p>Delhi, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/its-ashutosh-pathak" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn" id="socialLinkedin">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://github.com/its-ashutosh-pathak" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub" id="socialGithub">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://leetcode.com/its-ashutosh-pathak/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LeetCode" id="socialLeetcode">
                                    <i className="fas fa-code"></i>
                                </a>
                                <a href="https://www.instagram.com/its_ashutosh_pathak/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram" id="socialInstagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://wa.me/919871852159" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp" id="socialWhatsapp">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>

                        {/* ── Form Column ── */}
                        <form className="contact-form" onSubmit={handleSubmit} id="contactForm">
                            <input type="text" name="_honey" style={{ display: 'none' }} />

                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" name="name" required placeholder="Ashutosh Pathak" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input type="email" id="email" name="email" required placeholder="you@example.com" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="Let's collaborate!" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project or idea..."></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" disabled={isSubmitting} id="contactSubmit" style={{ width: '100%', justifyContent: 'center' }}>
                                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                <i className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {createPortal(
                <div className={`toast ${showToast ? 'show' : ''}`} id="successToast">
                    <i className="fas fa-check-circle"></i>
                    <span>Message sent! I'll get back to you soon.</span>
                </div>,
                document.body
            )}
        </>
    );
};

export default Contact;
