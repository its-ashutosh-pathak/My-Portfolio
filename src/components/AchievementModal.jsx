import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const AchievementModal = ({ achievement, onClose }) => {
    const [fullscreenIndex, setFullscreenIndex] = useState(null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleKey = (e) => {
            if (e.key === 'Escape') {
                if (fullscreenIndex !== null) setFullscreenIndex(null);
                else onClose();
            }
            if (fullscreenIndex !== null && achievement.gallery?.length > 0) {
                if (e.key === 'ArrowRight') {
                    setFullscreenIndex((prev) => (prev + 1) % achievement.gallery.length);
                } else if (e.key === 'ArrowLeft') {
                    setFullscreenIndex((prev) => (prev - 1 + achievement.gallery.length) % achievement.gallery.length);
                }
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKey);
        };
    }, [onClose, fullscreenIndex, achievement.gallery]);

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px', padding: 0, overflowX: 'hidden', overflowY: 'auto', maxHeight: '90vh' }}>
                <button
                    className="modal-close"
                    onClick={onClose}
                    aria-label="Close modal"
                    style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10, background: 'rgba(0,0,0,0.5)' }}
                >
                    <i className="fas fa-times"></i>
                </button>

                {achievement.gallery?.length > 0 && (
                    <div style={{ width: '100%', position: 'relative' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gridAutoRows: '150px',
                            gap: '0',
                            overflow: 'hidden'
                        }}>
                            {achievement.gallery.slice(0, 4).map((imgSrc, i) => {
                                let gridStyle = { gridColumn: 'span 1', gridRow: 'span 1' };
                                if (i === 0) gridStyle = { gridColumn: 'span 2', gridRow: 'span 2' };
                                else if (i === 1) gridStyle = { gridColumn: 'span 2', gridRow: 'span 1' };

                                const isLast = i === 3 && achievement.gallery.length > 4;
                                const remainingCount = achievement.gallery.length - 4;

                                return (
                                    <div
                                        key={i}
                                        onClick={() => setFullscreenIndex(isLast ? 0 : i)}
                                        style={{
                                            ...gridStyle,
                                            cursor: 'pointer', overflow: 'hidden', position: 'relative'
                                        }}
                                        onMouseOver={(e) => { e.currentTarget.children[0].style.transform = 'scale(1.05)'; e.currentTarget.children[0].style.filter = 'brightness(1.1)'; }}
                                        onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.children[0].style.filter = 'brightness(1)'; }}
                                    >
                                        <img
                                            src={imgSrc}
                                            alt={`Gallery ${i}`}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease, filter 0.3s ease' }}
                                        />
                                        {isLast && (
                                            <div style={{
                                                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                                                background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', zIndex: 2
                                            }}>
                                                +{remainingCount} See All
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(10,10,10,1) 100%)', pointerEvents: 'none' }}></div>
                    </div>
                )}

                {/* Content */}
                <div style={{ padding: '2rem 3rem 4rem', position: 'relative', zIndex: 2, marginTop: achievement.gallery?.length > 0 ? '-60px' : '0' }}>
                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--accent)', fontSize: '0.9rem', marginBottom: '1rem', fontWeight: 'bold' }}>
                        <span><i className={achievement.icon} style={{ marginRight: '6px', color: achievement.color }}></i> {achievement.organization}</span>
                        <span>&bull;</span>
                        <span style={{ color: 'var(--text-muted)' }}>{achievement.date}</span>
                    </div>

                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>{achievement.title}</h2>

                    <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        <div>
                            <div style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Overview</div>
                            {Array.isArray(achievement.description)
                                ? achievement.description.map((p, i) => <p key={i} style={{ marginBottom: '1rem' }}>{p}</p>)
                                : <p>{achievement.description}</p>
                            }
                        </div>

                        {achievement.learnings?.length > 0 && (
                            <div>
                                <div style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>What I Learned</div>
                                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {achievement.learnings.map((b, i) => <li key={i}>{b}</li>)}
                                </ul>
                            </div>
                        )}

                        {achievement.team && (
                            <div style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                <i className="fas fa-users" style={{ marginRight: '8px' }}></i>
                                {achievement.team}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Lightbox for Fullscreen Image */}
            {fullscreenIndex !== null && achievement.gallery && (
                <div
                    style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 9999,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'zoom-out'
                    }}
                    onClick={() => setFullscreenIndex(null)}
                >
                    <button
                        style={{
                            position: 'absolute', top: '20px', right: '30px',
                            background: 'none', border: 'none', color: '#fff', fontSize: '2rem', cursor: 'pointer', zIndex: 10000
                        }}
                        onClick={(e) => { e.stopPropagation(); setFullscreenIndex(null); }}
                        aria-label="Close fullscreen"
                    >
                        <i className="fas fa-times"></i>
                    </button>

                    <button
                        style={{
                            position: 'absolute', left: '30px',
                            background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%',
                            color: '#fff', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.5rem', cursor: 'pointer', zIndex: 10000, transition: 'background 0.2s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
                        onClick={(e) => {
                            e.stopPropagation();
                            setFullscreenIndex((prev) => (prev - 1 + achievement.gallery.length) % achievement.gallery.length);
                        }}
                        aria-label="Previous image"
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>

                    <img
                        src={achievement.gallery[fullscreenIndex]}
                        alt="Fullscreen"
                        style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', borderRadius: '8px', cursor: 'default' }}
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        style={{
                            position: 'absolute', right: '30px',
                            background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%',
                            color: '#fff', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.5rem', cursor: 'pointer', zIndex: 10000, transition: 'background 0.2s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
                        onClick={(e) => {
                            e.stopPropagation();
                            setFullscreenIndex((prev) => (prev + 1) % achievement.gallery.length);
                        }}
                        aria-label="Next image"
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            )}
        </div>,
        document.body
    );
};

export default AchievementModal;
