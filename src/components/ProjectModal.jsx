import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { urlFor } from '../client';

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKey);
        };
    }, [onClose]);

    return createPortal(
        <div className="modal-overlay" onClick={onClose} id="projectModalOverlay">
            <div className="modal" onClick={(e) => e.stopPropagation()} id="projectModal" style={{ maxWidth: '800px', padding: 0, overflowX: 'hidden', overflowY: 'auto', maxHeight: '90vh' }}>
                <button 
                    className="modal-close" 
                    onClick={onClose} 
                    aria-label="Close modal"
                    style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10, background: 'rgba(0,0,0,0.5)' }}
                >
                    <i className="fas fa-times"></i>
                </button>

                {/* Header Image */}
                {project.img && (
                    <div style={{ width: '100%', height: '250px', position: 'relative' }}>
                        <img
                            src={typeof project.img === 'object' ? urlFor(project.img).width(800).url() : project.img}
                            alt={project.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(10,10,10,1) 100%)' }}></div>
                    </div>
                )}

                {/* Content */}
                <div style={{ padding: '2rem 3rem 4rem', position: 'relative', zIndex: 2, marginTop: project.img ? '-60px' : '0' }}>
                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 'bold' }}>
                        <span><i className={project.icon} style={{ marginRight: '6px' }}></i> {project.field}</span>
                        <span>&bull;</span>
                        <span style={{ color: 'var(--text-muted)' }}>{project.date}</span>
                    </div>
                    
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>{project.title}</h2>
                    
                    <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        
                        <div>
                            <div style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Overview</div>
                            <p style={{ marginBottom: '1rem' }}>{project.summary}</p>
                            {project.descriptions?.map((d, i) => <p key={i} style={{ marginBottom: '1rem' }}>{d}</p>)}
                        </div>

                        {project.bulletPoints?.length > 0 && (
                            <div>
                                <div style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Key Features</div>
                                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {project.bulletPoints.map((b, i) => <li key={i}>{b}</li>)}
                                </ul>
                            </div>
                        )}

                        {project.techStack?.length > 0 && (
                            <div>
                                <div style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Tech Stack</div>
                                <div className="skill-tags">
                                    {project.techStack.map((t, i) => (
                                        <span className="skill-tag" key={i}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="modal-links" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        {project.liveLink && (
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="modalLiveLink">
                                <i className="fas fa-external-link-alt"></i>
                                <span>Live Link</span>
                            </a>
                        )}
                        {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" id="modalGithubLink">
                            <i className="fab fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
        </div>,
        document.body
    );
};

export default ProjectModal;
