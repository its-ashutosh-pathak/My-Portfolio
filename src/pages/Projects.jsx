import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../client';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        client.fetch(`*[_type == "project"] | order(_createdAt asc)`).then(setProjects);
    }, []);

    return (
        <>
            <section className="projects-hero">
                <div className="container">
                    <span className="section-tag"><i className="fas fa-code"></i> Projects</span>
                    <h1 className="section-title">Things I've built</h1>
                    <p className="section-subtitle">
                        Projects that demonstrate my ability to design, develop, and ship applications
                        using modern technologies — from idea to deployment.
                    </p>

                    <div className="education-grid" style={{ marginTop: '2.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                        {projects.map((project, index) => (
                            <div
                                key={project._id}
                                className="edu-card"
                                onClick={() => setSelectedProject(project)}
                                id={`project${index}`}
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
                </div>
            </section>

            {/* ── CTA ── */}
            <section style={{ paddingTop: 0, paddingBottom: '5rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                        Want to see what goes on behind the scenes? Check out my latest thoughts and builds.
                    </p>
                    <Link to="/blog" className="btn btn-primary" id="projectsToBlog">
                        <span>Read My Blog</span>
                        <i className="fas fa-pen-nib"></i>
                    </Link>
                </div>
            </section>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </>
    );
};

export default Projects;
