import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title reveal-up revealed" style={{ marginBottom: '1rem' }}>
                    My Projects
                </h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', maxWidth: '800px' }}>
                    These projects represent my hands-on experience in software development and my continuous effort to apply theoretical knowledge into practical solutions. Each project demonstrates my ability to design, develop, and deploy applications using modern technologies.
                </p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
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

                <div className="about-cta reveal-up" style={{ marginTop: '3rem' }}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Have an idea, a project, or an opportunity? Let's turn it into something real.</p>
                    <Link to="/contact" className="btn btn-secondary">
                        <span>Contact Me</span>
                        <i className="fas fa-envelope"></i>
                    </Link>
                </div>
            </div>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </section>
    );
};

export default Projects;
