export default {
    name: 'blog',
    title: 'Blog Post',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'date', title: 'Publish Date', type: 'string', description: 'e.g., October 4, 2026' },
        { name: 'readTime', title: 'Read Time', type: 'string', description: 'e.g., 5 min read' },
        { name: 'excerpt', title: 'Excerpt', type: 'text' },
        { name: 'thumbnail', title: 'Cover Image', type: 'image', options: { hotspot: true } },
        { name: 'content', title: 'Content Paragraphs', type: 'array', of: [{ type: 'text' }] }
    ]
}
