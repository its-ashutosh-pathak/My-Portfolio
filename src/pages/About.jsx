import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title reveal-up revealed" style={{ marginBottom: '1rem' }}>
                    About Me
                </h2>

                <div className="about-content">
                    <div className="about-text reveal-up revealed">
                        <p>
                            I am a B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning, with a passion for software development, AI technologies, and system design. I actively build projects to strengthen my practical understanding of programming, full-stack development, and intelligent systems, driven by curiosity, logic, and the occasional refusal to accept “that’s just how it works” as an answer. I enjoy building software that not only functions efficiently but is also structured to scale, adapt, and solve real problems.
                        </p>
                        <p>
                            I continuously explore new tools, technologies, and development practices to improve my technical skills and refine the way I approach problem-solving. I treat every project as an opportunity to learn something new, optimize something inefficient, or rebuild it properly when necessary. I believe there is always a better solution, it just hasn’t been built yet and it is just a matter of curiosity, persistence, and occasionally refusing to settle for “good enough.”
                        </p>
                        <p>
                            Beyond technology, I have a creative and curious side that shapes how I think and solve problems. I enjoy sketching, as it allows me to visualize ideas and pay attention to the small details that often make the biggest difference. Reading is another habit I value, as it exposes me to new perspectives, ideas, and ways of thinking beyond my immediate environment.
                        </p>
                        <p>
                            I also enjoy playing video games, especially those that demand strategy, focus, and calm decision-making under pressure. They’ve taught me that panic is inefficient, while patience and clear thinking are far more effective. This mindset carries directly into development, where most problems aren’t solved by rushing, but by staying calm long enough to understand what’s actually wrong.
                        </p>
                        <p>
                            I also maintain a long-standing and highly reliable partnership with black coffee, which has been directly responsible for surviving late-night debugging sessions, deep work phases, and solving problems that refused to cooperate during normal hours. At this point, it is less of a beverage and more of a core system dependency.
                        </p>
                        <p>
                            If you’ve read this far, you’ve probably already realized that I have a habit of using humor, sometimes even when the situation doesn’t officially approve of it. It’s less of a distraction and more of a side effect of staying calm under pressure. I’ve found that most systems, and most problems, respond better to patience, clear thinking, and persistence than to panic. Humor just helps maintain system stability including my own.
                        </p>
                    </div>

                    <div>
                        <h3 className="timeline-title">Skills</h3>
                        <div className="skills-grid reveal-up delay-1 revealed">
                            <div className="skill-category">
                                <h3><i className="fas fa-code"></i> Programming Languages</h3>
                                <div className="skill-tags">
                                    <span className="skill-tag">Java</span>
                                    <span className="skill-tag">Python</span>
                                    <span className="skill-tag">JavaScript</span>
                                    <span className="skill-tag">TypeScript</span>
                                    <span className="skill-tag">C</span>
                                </div>
                            </div>

                            <div className="skill-category">
                                <h3><i className="fas fa-laptop-code"></i> Frontend Development</h3>
                                <div className="skill-tags">
                                    <span className="skill-tag">HTML5</span>
                                    <span className="skill-tag">CSS3</span>
                                    <span className="skill-tag">Vanilla JavaScript</span>
                                    <span className="skill-tag">React</span>
                                    <span className="skill-tag">Tailwind CSS</span>
                                    <span className="skill-tag">Framer Motion</span>
                                    <span className="skill-tag">Vite</span>
                                </div>
                            </div>

                            <div className="skill-category">
                                <h3><i className="fas fa-server"></i> Backend Development</h3>
                                <div className="skill-tags">
                                    <span className="skill-tag">Node.js</span>
                                    <span className="skill-tag">Express.js</span>
                                    <span className="skill-tag">Socket.io</span>
                                    <span className="skill-tag">JSON Web Token (JWT)</span>
                                    <span className="skill-tag">Nodemailer</span>
                                    <span className="skill-tag">bcrypt</span>
                                </div>
                            </div>

                            <div className="skill-category">
                                <h3><i className="fas fa-database"></i> Database</h3>
                                <div className="skill-tags">
                                    <span className="skill-tag">MongoDB</span>
                                    <span className="skill-tag">Firebase</span>
                                </div>
                            </div>

                            <div className="skill-category">
                                <h3><i className="fas fa-tools"></i> Tools & Technologies</h3>
                                <div className="skill-tags">
                                    <span className="skill-tag">Git</span>
                                    <span className="skill-tag">GitHub</span>
                                    <span className="skill-tag">VS Code</span>
                                    <span className="skill-tag">Netlify</span>
                                    <span className="skill-tag">Render</span>
                                    <span className="skill-tag">Vercel</span>
                                    <span className="skill-tag">Android Studio</span>
                                    <span className="skill-tag">Capacitor</span>
                                    <span className="skill-tag">Search Engine Optimization (SEO)</span>
                                    <span className="skill-tag">Copilot</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="experience-timeline reveal-up revealed">
                    <h3 className="timeline-title">Education</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h4>Bachelor of Technology - BTech</h4>
                                <p className="timeline-meta">KCC Institute of Technology and Management • Jun 2025 - Jun 2029</p>
                                <p>Computer Science and Engineering (Artificial Intelligence and Machine Learning)</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h4>Bachelor of Technology - BTech</h4>
                                <p className="timeline-meta">Dr. A.P.J. Abdul Kalam Technical University • Jun 2025 - Jun 2029</p>
                                <p>Computer Science and Engineering - KCC Institute of Technology and Management is affiliated to Dr. APJ Abdul Kalam Technical University</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h4>12th Grade</h4>
                                <p className="timeline-meta">Govt Boys Sr Sec School Dharampura Najafgarh ND • Apr 2022 - Apr 2023</p>
                                <p>Senior Secondary Education</p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h4>10th Grade</h4>
                                <p className="timeline-meta">G B S S Nangli Sakrawati New Delhi • Apr 2020 - Apr 2021</p>
                                <p>Secondary Education</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="experience-timeline reveal-up revealed">
                    <h3 className="timeline-title">Experience</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h4>Freelance Web Developer</h4>
                                <p className="timeline-meta">Bhagwati Logistics · Freelance · Jan 2026 - Feb 2026</p>
                                <p className="timeline-meta">Delhi, India · Remote</p>
                                <p>Designed and developed a responsive business website for a logistics company from scratch.</p>
                                <ul>
                                    <li>Gathered business requirements and translated them into a functional website</li>
                                    <li>Implemented mobile-first responsive layout using Flexbox and Grid</li>
                                    <li>Added SEO optimizations including meta tags, sitemap.xml, robots.txt, and Schema.org JSON-LD</li>
                                    <li>Integrated contact form using Netlify (no backend)</li>
                                </ul>
                                <p>Live link: <a href="https://bhagwatilogistics.in" target="_blank" rel="noopener noreferrer" style={{ color: '#46a3ff' }}>https://bhagwatilogistics.in</a></p>
                                <p style={{ marginTop: '1rem' }}>Tech Stack Used:</p>
                                <div className="skill-tags" style={{ marginTop: '1rem' }}>
                                    <span className="skill-tag">HTML5</span>
                                    <span className="skill-tag">CSS3</span>
                                    <span className="skill-tag">Vanilla JavaScript</span>
                                    <span className="skill-tag">Netlify</span>
                                    <span className="skill-tag">Search Engine Optimization (SEO)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-cta reveal-up" style={{ marginTop: '3rem' }}>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Now these are the on-paper details, but the best way to understand a developer isn't by what they say — it's by what they build.</p>
                    <Link to="/projects" className="btn btn-secondary">
                        <span>View My Work</span>
                        <i className="fas fa-laptop"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
