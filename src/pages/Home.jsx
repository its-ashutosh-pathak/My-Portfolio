import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../client';
import ProjectModal from '../components/ProjectModal';

const Home = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [settings, setSettings] = useState(null);
    const [projects, setProjects] = useState([]);
    const typingRef = useRef(null);

    useEffect(() => {
        client.fetch(`*[_type == "siteSettings"][0]`).then(setSettings);
        client.fetch(`*[_type == "project"] | order(_createdAt asc)`).then(setProjects);
    }, []);

    // Typing effect — runs when settings (and taglines) are loaded
    useEffect(() => {
        if (!settings?.tagline?.length) return;
        const element = typingRef.current;
        if (!element) return;

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeTimeout;

        const type = () => {
            const texts = settings.tagline;
            const currentText = texts[textIndex];
            element.textContent = isDeleting
                ? currentText.substring(0, charIndex - 1)
                : currentText.substring(0, charIndex + 1);

            isDeleting ? charIndex-- : charIndex++;

            let speed = isDeleting ? 45 : 95;
            if (!isDeleting && charIndex === currentText.length) {
                speed = 2200;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                speed = 400;
            }
            typeTimeout = setTimeout(type, speed);
        };

        typeTimeout = setTimeout(type, 600);
        return () => clearTimeout(typeTimeout);
    }, [settings]);

    return (
        <>
            {/* ── HERO ── */}
            <section id="home" className="hero">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-eyebrow">
                            <span className="dot" style={{ background: settings?.availableForWork ? '#22c55e' : '#666' }}></span>
                            {settings?.availableForWork ? 'Available for opportunities' : 'Currently not available'}
                        </div>

                        <h1 className="hero-title">
                            Hi, I'm<br />
                            {settings?.name?.split(' ')[0] || 'Ashutosh'} <span className="name-accent">{settings?.name?.split(' ')[1] || 'Pathak'}</span>
                        </h1>

                        <div className="hero-subtitle">
                            <span className="typing-text" ref={typingRef}></span>
                            <span className="cursor">|</span>
                        </div>

                        <p className="hero-bio">{settings?.heroBio}</p>

                        <div className="hero-buttons">
                            <Link to="/contact" className="btn btn-primary" id="heroContact">
                                <span>Get In Touch</span>
                                <i className="fas fa-envelope"></i>
                            </Link>
                            <a href="#home-projects" className="btn btn-secondary" id="heroViewWork">
                                <span>View My Work</span>
                                <i className="fas fa-arrow-down"></i>
                            </a>
                        </div>

                        <div className="hero-links">
                            {settings?.githubUrl && (
                                <a href={settings.githubUrl} target="_blank" rel="noopener noreferrer" className="hero-link" id="heroGithub">
                                    <i className="fab fa-github"></i>
                                </a>
                            )}
                            {settings?.linkedinUrl && (
                                <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hero-link" id="heroLinkedin">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            )}
                            {settings?.twitterUrl && (
                                <a href={settings.twitterUrl} target="_blank" rel="noopener noreferrer" className="hero-link" id="heroTwitter">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="hero-meta">
                        {settings?.stats?.map((stat, i) => (
                            <div className="hero-stat" key={i}>
                                <span className="hero-stat-num">{stat.value}</span>
                                <span className="hero-stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="profile-wrap">
                        <div className="profile-ring"></div>
                        <div className="profile-image-wrapper">
                            {settings?.profilePhoto ? (
                                <img src={urlFor(settings.profilePhoto).width(400).url()} alt={settings.name} className="profile-image" />
                            ) : (
                                <img src="/images/profile.jpg" alt="Ashutosh Pathak" className="profile-image" />
                            )}
                        </div>
                        <div className="profile-badge">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>{settings?.location || 'Delhi, India'}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ABOUT SNIPPET ── */}
            <section className="container" style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
                <span className="section-tag"><i className="fas fa-user"></i> About Me</span>
                <h2 className="section-title">Turning curiosity<br />into code</h2>
                <div className="about-content-home">
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.02rem', lineHeight: '1.8', maxWidth: '700px' }}>
                        {settings?.aboutBio?.[0] || "I'm a CSE student specializing in AI & ML, passionate about software development, system design, and building things that actually work."}
                    </p>
                    <Link to="/about" className="btn btn-primary" id="heroAboutLink">
                        <span>Read More</span>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </section>

            {/* ── PROJECTS PREVIEW ── */}
            <section id="home-projects" className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
                <span className="section-tag"><i className="fas fa-code"></i> Projects</span>
                <h2 className="section-title">Things I've built</h2>
                <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
                    A selection of projects that show how I think, build, and ship.
                </p>

                <div className="education-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                    {projects.slice(0, 3).map((project, index) => (
                        <div
                            key={project._id}
                            className="edu-card"
                            onClick={() => setSelectedProject(project)}
                            id={`homeProject${index}`}
                            style={{ cursor: 'pointer' }}
                        >
                            <img
                                src={project.img ? urlFor(project.img).width(600).url() : ''}
                                alt={project.title}
                                className="edu-card-img"
                            />
                            <div className="edu-card-overlay"></div>
                            <div className="edu-card-content">
                                <div className="edu-card-period" style={{ color: 'var(--accent)' }}>{project.date}</div>
                                <div className="edu-card-degree" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{project.title}</div>
                                <div className="edu-card-field">{project.field}</div>
                                <div className="edu-card-institution" style={{ opacity: 0.8, marginTop: '8px' }}>
                                    {project.techStack?.slice(0, 3).join(' · ')}
                                    {project.techStack?.length > 3 && ` · +${project.techStack.length - 3}`}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '2.5rem' }}>
                    <Link to="/projects" className="btn btn-primary" id="homeAllProjects">
                        <span>See All Projects</span>
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </section>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </>
    );
};

export default Home;
