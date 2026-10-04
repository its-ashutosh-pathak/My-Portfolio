// workExperience.js — Controls the "Work History" section
export default {
    name: 'workExperience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        {
            name: 'role',
            title: 'Job Title / Role',
            type: 'string',
            description: 'e.g., Freelance Web Developer',
        },
        {
            name: 'company',
            title: 'Company / Organization',
            type: 'string',
        },
        {
            name: 'period',
            title: 'Period',
            type: 'string',
            description: 'e.g., Jan 2026 – Feb 2026',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'e.g., Delhi, India · Remote',
        },
        {
            name: 'type',
            title: 'Employment Type',
            type: 'string',
            options: {
                list: ['Full-Time', 'Part-Time', 'Freelance', 'Internship', 'Contract'],
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'What you did in this role',
        },
        {
            name: 'bulletPoints',
            title: 'Key Responsibilities / Achievements',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'link',
            title: 'Project / Company Link',
            type: 'url',
            description: 'Optional link to the company or the project you worked on',
        },
        {
            name: 'techStack',
            title: 'Technologies Used',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'coverImage',
            title: 'Cover / Company Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first',
        },
    ]
}
