import React, { useState, useEffect } from 'react';
import BlogModal from '../components/BlogModal';
import { client, urlFor } from '../client';

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        client.fetch(`*[_type == "blog"] | order(_createdAt desc)`).then(setBlogs);
    }, []);

    return (
        <section className="blog-hero">
            <div className="container">
                <span className="section-tag"><i className="fas fa-pen-nib"></i> Blog</span>
                <h1 className="section-title">Thoughts, builds<br />& lessons learned.</h1>
                <p className="section-subtitle">
                    Writing about software, AI, and things I figure out along the way.
                    Usually the stuff I wish someone had already written.
                </p>

                {blogs.length > 0 ? (
                    <div className="education-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                        {blogs.map((post, i) => (
                            <div className="edu-card" key={post._id} style={{ cursor: 'pointer' }} id={`blogPost${i}`} onClick={() => setSelectedPost(post)}>
                                {post.thumbnail ? (
                                    <img src={urlFor(post.thumbnail).width(600).url()} alt={post.title} className="edu-card-img" />
                                ) : (
                                    <div className="edu-card-img" style={{ background: 'var(--surface-color)' }}></div>
                                )}
                                <div className="edu-card-overlay"></div>
                                <div className="edu-card-content">
                                    <div className="edu-card-period" style={{ color: 'var(--accent)' }}>{post.date} &bull; {post.readTime}</div>
                                    <div className="edu-card-degree" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{post.title}</div>
                                    <div className="edu-card-institution" style={{ opacity: 0.8, marginTop: '8px', lineHeight: '1.5' }}>{post.excerpt}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                        <i className="fas fa-pen-nib" style={{ fontSize: '3rem', marginBottom: '1.5rem', display: 'block', opacity: 0.3 }}></i>
                        <p>No posts yet — but ideas are brewing. Check back soon.</p>
                    </div>
                )}
            </div>

            {selectedPost && (
                <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
            )}
        </section>
    );
};

export default Blog;
