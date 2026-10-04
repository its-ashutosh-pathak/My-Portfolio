// skillCategory.js — Controls the "What I Work With" section
export default {
    name: 'skillCategory',
    title: 'Skill Category',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Category Name',
            type: 'string',
            description: 'e.g., Frontend Development',
        },
        {
            name: 'icon',
            title: 'FontAwesome Icon',
            type: 'string',
            description: 'e.g., fas fa-laptop-code',
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Background image for this skill card',
        },
        {
            name: 'tags',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'e.g., React, Node.js, Python',
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first',
        },
    ]
}
