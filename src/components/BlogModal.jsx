import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const BlogModal = ({ post, onClose }) => {
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
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', padding: 0, overflowX: 'hidden', overflowY: 'auto', maxHeight: '90vh' }}>
                
                {/* Header Image */}
                {post.thumbnail && (
                    <div style={{ width: '100%', height: '250px', position: 'relative' }}>
                        <img src={post.thumbnail} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(10,10,10,1) 100%)' }}></div>
                    </div>
                )}
                
                <button 
                    className="modal-close" 
                    onClick={onClose} 
                    aria-label="Close modal"
                    style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10, background: 'rgba(0,0,0,0.5)' }}
                >
                    <i className="fas fa-times"></i>
                </button>

                {/* Content */}
                <div style={{ padding: '2rem 3rem 4rem', position: 'relative', zIndex: 2, marginTop: post.thumbnail ? '-60px' : '0' }}>
                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 'bold' }}>
                        <span>{post.category}</span>
                        <span>&bull;</span>
                        <span style={{ color: 'var(--text-muted)' }}>{post.date}</span>
                        <span style={{ color: 'var(--text-muted)' }}>&bull;</span>
                        <span style={{ color: 'var(--text-muted)' }}><i className="fas fa-clock" style={{ marginRight: '4px' }}></i> {post.readTime}</span>
                    </div>
                    
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>{post.title}</h2>
                    
                    <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {Array.isArray(post.content) 
                            ? post.content.map((p, i) => <p key={i}>{p}</p>)
                            : <p>{post.content || post.excerpt}</p>
                        }
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default BlogModal;
