import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    if (!project) return null;

    return createPortal(
        <div className="project-modal-overlay" onClick={onClose}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                <button className="project-modal-close" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>

                <div className="project-modal-header">
                    <div className="project-icon">
                        <i className={project.icon}></i>
                    </div>
                    <div>
                        <h3>{project.title}</h3>
                        <p className="timeline-meta">{project.date}</p>
                    </div>
                </div>

                <div className="project-modal-body">
                    <p>{project.summary}</p>
                    {project.descriptions && project.descriptions.map((desc, i) => (
                        <p key={i} style={{ marginTop: '0.75rem' }}>{desc}</p>
                    ))}
                    {project.bulletPoints && (
                        <ul style={{ marginTop: '0.75rem', paddingLeft: '1.5rem' }}>
                            {project.bulletPoints.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    )}
                    {project.liveLink && (
                        <p style={{ marginTop: '0.75rem' }}>
                            Live link: <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{ color: '#46a3ff' }}>{project.liveLink}</a>
                        </p>
                    )}
                    {project.githubLink && (
                        <p style={{ marginTop: '0.75rem' }}>
                            Check it out: <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ color: '#46a3ff' }}>{project.githubLink}</a>
                        </p>
                    )}
                    <p style={{ marginTop: '1rem' }}>Tech Stack Used:</p>
                    <div className="skill-tags" style={{ marginTop: '0.5rem' }}>
                        {project.techStack.map((tech, i) => (
                            <span key={i} className="skill-tag">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ProjectModal;
