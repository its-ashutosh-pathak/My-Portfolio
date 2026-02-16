import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const Contact = () => {
    const [showModal, setShowModal] = useState(false);
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
            setShowModal(true);
            e.target.reset();
            setTimeout(() => setShowModal(false), 3000);
        } catch (error) {
            alert('Something went wrong. Please try again or reach out via email.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title reveal-up revealed" style={{ marginBottom: '1rem' }}>
                    Get In Touch
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', maxWidth: '800px' }}>
                    If you have a project, an idea, or an opportunity in mind, I'd be glad to connect. I'm open to collaborations, freelance work, internships, and meaningful conversations where ideas turn into real systems. Let's build something meaningful together.
                </p>

                <div className="contact-content">
                    <div className="contact-info reveal-up revealed">
                        <h3>Let's Connect</h3>

                        <div className="contact-methods">
                            <a href="mailto:ashutoshpathakab@gmail.com" className="contact-method">
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h4>Email</h4>
                                    <p>ashutoshpathakab@gmail.com</p>
                                </div>
                            </a>

                            <a href="tel:+919871852159" className="contact-method">
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
                            <a href="https://wa.me/919871852159" target="_blank" rel="noopener noreferrer"
                                className="social-link" aria-label="WhatsApp">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/its-ashutosh-pathak" target="_blank" rel="noopener noreferrer"
                                className="social-link" aria-label="LinkedIn">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/its-ashutosh-pathak" target="_blank" rel="noopener noreferrer"
                                className="social-link" aria-label="GitHub">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://leetcode.com/its-ashutosh-pathak/" target="_blank" rel="noopener noreferrer"
                                className="social-link" aria-label="LeetCode">
                                <i className="fas fa-code"></i>
                            </a>
                            <a href="https://www.instagram.com/its_ashutosh_pathak/" target="_blank" rel="noopener noreferrer"
                                className="social-link" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <form className="contact-form reveal-up delay-1 revealed" onSubmit={handleSubmit} id="contactForm">
                        <input type="text" name="_honey" style={{ display: 'none' }} />

                        <div className="form-group">
                            <input type="text" id="name" name="name" required placeholder=" " />
                            <label htmlFor="name">Your Name</label>
                        </div>

                        <div className="form-group">
                            <input type="email" id="email" name="email" required placeholder=" " />
                            <label htmlFor="email">Your Email</label>
                        </div>

                        <div className="form-group">
                            <textarea id="message" name="message" rows="5" required placeholder=" "></textarea>
                            <label htmlFor="message">Your Message</label>
                        </div>

                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                            <i className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
                        </button>
                    </form>
                </div>
            </div>

            {/* Success Modal */}
            {createPortal(
                <div className={`modal ${showModal ? 'active' : ''}`} id="successModal">
                    <div className="modal-content">
                        <div className="modal-icon">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <h3>Message Sent!</h3>
                        <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                        <button className="btn btn-primary" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>,
                document.body
            )}
        </section>
    );
};

export default Contact;
