import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import ProjectModal from '../components/ProjectModal';

const Home = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Typing Animation Logic
    const typingRef = useRef(null);
    const texts = [
        'Engineering Student',
        'Full Stack Developer',
        'Aspiring AI/ML Engineer',
        'Creative Technologist'
    ];

    useEffect(() => {
        const element = typingRef.current;
        if (!element) return;

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeTimeout;

        const type = () => {
            const currentText = texts[textIndex];

            if (isDeleting) {
                element.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                element.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500;
            }

            typeTimeout = setTimeout(type, typeSpeed);
        };

        typeTimeout = setTimeout(type, 100);

        return () => clearTimeout(typeTimeout);
    }, []);

    return (
        <>
            <section id="home" className="hero">
                <div className="hero-content">
                    <div className="hero-text reveal-up revealed">
                        <h1 className="hero-title">
                            Hi, <br />
                            <span style={{ whiteSpace: 'nowrap' }}>I'm <span style={{ color: '#ffffff' }}>Ashutosh</span> <span className="logo-accent">Pathak</span></span>
                        </h1>
                        <div className="hero-subtitle">
                            <span className="typing-text" ref={typingRef}></span>
                            <span className="cursor">|</span>
                        </div>

                        <div className="hero-buttons">
                            <a href="#home-projects" className="btn btn-primary">
                                <span>View My Work</span>
                                <i className="fas fa-laptop"></i>
                            </a>
                            <Link to="/contact" className="btn btn-secondary">
                                <span>Get In Touch</span>
                                <i className="fas fa-envelope"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="hero-visual reveal-up delay-1 revealed">
                        <div className="profile-card">
                            <div className="profile-image-wrapper">
                                <img src="/images/profile.jpg" alt="Ashutosh Pathak" className="profile-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section container" style={{ paddingBottom: '4rem' }}>
                <h2 className="section-title reveal-up revealed" style={{ marginBottom: '1.5rem' }}>
                    About Me
                </h2>
                <div className="about-content-home">
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '800px' }}>
                        I am a B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning, with a passion for software development, AI technologies, and system design. I actively build projects to strengthen my practical understanding of programming, full-stack development, and intelligent systems, driven by curiosity, logic, and the occasional refusal to accept “that’s just how it works” as an answer. I enjoy building software that not only functions efficiently but is also structured to scale, adapt, and solve real problems.
                    </p>
                    <Link to="/about" className="btn btn-secondary">
                        <span>Know more</span>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </section>

            <section id="home-projects" className="projects-section container" style={{ paddingBottom: '4rem' }}>
                <h2 className="section-title reveal-up revealed" style={{ marginBottom: '2rem' }}>
                    My Projects
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', maxWidth: '800px' }}>
                    These projects represent my hands-on experience in software development and my continuous effort to apply theoretical knowledge into practical solutions. Each project demonstrates my ability to design, develop, and deploy applications using modern technologies.
                </p>
                <div className="projects-grid" style={{ marginBottom: '2rem', textAlign: 'left' }}>
                    {projects.slice(0, 3).map((project, index) => (
                        <div
                            key={index}
                            className={`project-card reveal-up ${index > 0 ? `delay-${index}` : ''} revealed`}
                            onClick={() => setSelectedProject(project)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="project-icon">
                                <i className={project.icon}></i>
                            </div>
                            <h3>{project.title}</h3>
                            <p className="timeline-meta" style={{ marginBottom: '0.5rem' }}>{project.date}</p>
                            <p>{project.summary}</p>
                            <div className="project-card-toggle">
                                <span>Tap to view more</span>
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to="/projects" className="btn btn-secondary">
                    <span>See more</span>
                    <i className="fas fa-arrow-right"></i>
                </Link>
            </section>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </>
    );
};

export default Home;
