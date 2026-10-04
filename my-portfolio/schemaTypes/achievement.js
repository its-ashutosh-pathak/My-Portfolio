export default {
    name: 'achievement',
    title: 'Achievement',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'organization', title: 'Organization', type: 'string' },
        { name: 'date', title: 'Date', type: 'string', description: 'e.g., Aug 2026' },
        { name: 'icon', title: 'FontAwesome Icon', type: 'string', description: 'e.g., fas fa-trophy' },
        { name: 'color', title: 'Icon Color', type: 'string', description: 'e.g., #FFD700' },
        { name: 'description', title: 'Overview', type: 'array', of: [{ type: 'text' }] },
        { name: 'learnings', title: 'What I Learned', type: 'array', of: [{ type: 'string' }] },
        { name: 'team', title: 'Team / Group', type: 'string' },
        { name: 'gallery', title: 'Photo Gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }
    ]
}
