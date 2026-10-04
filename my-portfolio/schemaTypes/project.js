export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'date', title: 'Date Range', type: 'string', description: 'e.g., FEB 2026 - JUN 2026' },
        { name: 'field', title: 'Field / Type', type: 'string', description: 'e.g., Web App · React' },
        { name: 'icon', title: 'FontAwesome Icon', type: 'string', description: 'e.g., fas fa-music' },
        { name: 'img', title: 'Cover Image', type: 'image', options: { hotspot: true } },
        { name: 'summary', title: 'Summary', type: 'text' },
        { name: 'descriptions', title: 'Detailed Descriptions', type: 'array', of: [{ type: 'text' }] },
        { name: 'bulletPoints', title: 'Key Features', type: 'array', of: [{ type: 'string' }] },
        { name: 'techStack', title: 'Tech Stack', type: 'array', of: [{ type: 'string' }] },
        { name: 'liveLink', title: 'Live Link', type: 'url' },
        { name: 'githubLink', title: 'GitHub Link', type: 'url' },
    ]
}
