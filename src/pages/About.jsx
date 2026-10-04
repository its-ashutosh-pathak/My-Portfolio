import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../client';
import AchievementModal from '../components/AchievementModal';

const About = () => {
    const [selectedAchievement, setSelectedAchievement] = useState(null);
    const [settings, setSettings] = useState(null);
    const [skills, setSkills] = useState([]);
    const [education, setEducation] = useState([]);
    const [achievements, setAchievements] = useState([]);
    const [workHistory, setWorkHistory] = useState([]);

    useEffect(() => {
        client.fetch(`*[_type == "siteSettings"][0]`).then(setSettings);
        client.fetch(`*[_type == "skillCategory"] | order(order asc)`).then(setSkills);
        client.fetch(`*[_type == "education"] | order(order asc)`).then(setEducation);
        client.fetch(`*[_type == "achievement"] | order(_createdAt desc)`).then(setAchievements);
        client.fetch(`*[_type == "workExperience"] | order(order asc)`).then(setWorkHistory);
    }, []);

    // Adapter: map Sanity achievement to the format AchievementModal expects
    const adaptAchievement = (ach) => ({
        ...ach,
        img: ach.gallery?.[0] ? urlFor(ach.gallery[0]).width(800).url() : null,
        gallery: ach.gallery?.map(img => urlFor(img).width(1200).url()) || [],
        description: ach.description || [],
    });

    return (
        <>
            {/* ── INTRO ── */}
            <section className="about-hero">
                <div className="container">
                    <span className="section-tag"><i className="fas fa-user"></i> About Me</span>
                    <h1 className="section-title">I build things and<br />break them to understand.</h1>

                    <div className="about-intro-grid" style={{ marginTop: '2.5rem' }}>
                        <div className="about-intro-text">
                            {(settings?.aboutBio || [
                                "I'm a B.Tech CSE student specializing in AI & ML — building full-stack applications, intelligent systems, and the occasional project that refuses to cooperate until 3 AM.",
                                "I continuously explore new tools and development practices to improve my technical skills and refine how I approach problem-solving.",
                                "Beyond code, I sketch to visualize ideas, read to gain perspective, and play strategy games that taught me one thing: panic is inefficient, patience wins.",
                                "I also maintain a highly reliable partnership with black coffee — directly responsible for surviving late-night debugging sessions.",
                            ]).map((para, i) => <p key={i}>{para}</p>)}
                        </div>

                        <div className="about-image-wrapper" style={{ flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                            <img
                                src={settings?.aboutProfilePhoto ? urlFor(settings.aboutProfilePhoto).width(400).url() : '/images/profile-dp.jpeg'}
                                alt={settings?.name || 'Ashutosh Pathak'}
                                className="about-profile-image"
                            />
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontStyle: 'italic', textAlign: 'center' }}>
                                {settings?.aboutCaption || '📸 Live footage of me debugging production at 3 AM'}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SKILLS ── */}
            <section className="skills-section">
                <div className="container">
                    <span className="section-tag"><i className="fas fa-layer-group"></i> Skills</span>
                    <h2 className="section-title">What I work with</h2>
                    <div className="education-grid">
                        {skills.map((cat, i) => (
                            <div className="edu-card" key={cat._id || i}>
                                {cat.coverImage && (
                                    <img src={urlFor(cat.coverImage).width(600).url()} alt={cat.title} className="edu-card-img" />
                                )}
                                <div className="edu-card-overlay"></div>
                                <div className="edu-card-content" style={{ zIndex: 2, position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', gap: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
                                        <i className={cat.icon} style={{ color: 'var(--accent)', fontSize: '1.4rem' }}></i>
                                        <div className="edu-card-degree" style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: 0 }}>{cat.title}</div>
                                    </div>
                                    <div className="skill-tags">
                                        {cat.tags?.map((tag, j) => (
                                            <span className="skill-tag" key={j}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ACHIEVEMENTS ── */}
            <section className="achievements-section" style={{ paddingTop: '2rem' }}>
                <div className="container">
                    <span className="section-tag"><i className="fas fa-trophy"></i> Achievements</span>
                    <h2 className="section-title">Hackathons & Awards</h2>
                    <div className="education-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                        {achievements.map((ach, i) => {
                            const adapted = adaptAchievement(ach);
                            return (
                                <div className="edu-card" key={ach._id || i} onClick={() => setSelectedAchievement(adapted)} style={{ cursor: 'pointer' }}>
                                    {adapted.img && <img src={adapted.img} alt={ach.title} className="edu-card-img" />}
                                    <div className="edu-card-overlay"></div>
                                    <div className="edu-card-content">
                                        <div className="edu-card-period">{ach.date}</div>
                                        <div className="edu-card-degree">{ach.title}</div>
                                        <div className="edu-card-field">{ach.organization}</div>
                                        <div className="edu-card-institution">{ach.team}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── EDUCATION ── */}
            <section className="education-section">
                <div className="container">
                    <span className="section-tag"><i className="fas fa-graduation-cap"></i> Education</span>
                    <h2 className="section-title">Academic Journey</h2>
                    <div className="education-grid">
                        {education.map((edu, i) => (
                            <div className="edu-card" key={edu._id || i}>
                                {edu.coverImage && (
                                    <img src={urlFor(edu.coverImage).width(600).url()} alt={edu.institution} className="edu-card-img" />
                                )}
                                <div className="edu-card-overlay"></div>
                                <div className="edu-card-content">
                                    <div className="edu-card-period">{edu.period}</div>
                                    <div className="edu-card-degree">{edu.degree}</div>
                                    <div className="edu-card-field">{edu.field}</div>
                                    <div className="edu-card-institution">{edu.institution}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WORK HISTORY ── */}
            <section className="experience-section">
                <div className="container">
                    <span className="section-tag"><i className="fas fa-briefcase"></i> Experience</span>
                    <h2 className="section-title">Work History</h2>
                    <div className="timeline">
                        {workHistory.length > 0 ? workHistory.map((job, i) => (
                            <div className="timeline-item" key={job._id || i}>
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h4>{job.role}</h4>
                                    <div className="timeline-meta">
                                        {[job.company, job.type, job.period, job.location].filter(Boolean).join(' · ')}
                                    </div>
                                    {job.description && <p>{job.description}</p>}
                                    {job.bulletPoints?.length > 0 && (
                                        <ul>
                                            {job.bulletPoints.map((b, j) => <li key={j}>{b}</li>)}
                                        </ul>
                                    )}
                                    {job.link && (
                                        <p>Live link: <a href={job.link} target="_blank" rel="noopener noreferrer" style={{ color: '#46a3ff' }}>{job.link}</a></p>
                                    )}
                                    {job.techStack?.length > 0 && (
                                        <div className="skill-tags" style={{ marginTop: '1rem' }}>
                                            {job.techStack.map((t, j) => <span className="skill-tag" key={j}>{t}</span>)}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )) : (
                            // Fallback hardcoded until added in CMS
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h4>Freelance Web Developer</h4>
                                    <div className="timeline-meta">Bhagwati Logistics · Freelance · Jan 2026 – Feb 2026 · Delhi, India</div>
                                    <p>Designed and developed a responsive business website for a logistics company from scratch.</p>
                                    <ul>
                                        <li>Gathered requirements and translated them into a functional website</li>
                                        <li>Implemented mobile-first responsive layout using Flexbox and Grid</li>
                                        <li>Added SEO optimizations: meta tags, sitemap.xml, robots.txt, Schema.org JSON-LD</li>
                                        <li>Integrated contact form using Netlify (no backend)</li>
                                    </ul>
                                    <div className="skill-tags" style={{ marginTop: '1rem' }}>
                                        {['HTML5', 'CSS3', 'Vanilla JavaScript', 'Netlify', 'SEO'].map((t, i) => (
                                            <span className="skill-tag" key={i}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section style={{ paddingTop: 0, paddingBottom: '5rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1rem' }}>
                        The best way to understand a developer isn't what they say — it's what they build.
                    </p>
                    <Link to="/projects" className="btn btn-primary" id="aboutViewWork">
                        <span>View My Projects</span>
                        <i className="fas fa-laptop"></i>
                    </Link>
                </div>
            </section>

            {selectedAchievement && (
                <AchievementModal
                    achievement={selectedAchievement}
                    onClose={() => setSelectedAchievement(null)}
                />
            )}
        </>
    );
};

export default About;
