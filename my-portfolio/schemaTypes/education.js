// education.js — Controls the "Academic Journey" section
export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
            name: 'degree',
            title: 'Degree / Level',
            type: 'string',
            description: 'e.g., B.Tech — Computer Science',
        },
        {
            name: 'field',
            title: 'Field of Study',
            type: 'string',
            description: 'e.g., Artificial Intelligence & Machine Learning',
        },
        {
            name: 'institution',
            title: 'Institution Name',
            type: 'string',
        },
        {
            name: 'period',
            title: 'Period',
            type: 'string',
            description: 'e.g., Jun 2025 – Jun 2029',
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Photo of the campus / school',
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first',
        },
    ]
}
