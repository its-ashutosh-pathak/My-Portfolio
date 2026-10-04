// siteSettings.js — Controls the global profile info shown across the site
export default {
    name: 'siteSettings',
    title: 'Site Settings & Profile',
    type: 'document',
    __experimental_actions: ['update', 'publish'], // only one doc, no create/delete
    fields: [
        {
            name: 'name',
            title: 'Full Name',
            type: 'string',
            description: 'e.g., Ashutosh Pathak',
        },
        {
            name: 'availableForWork',
            title: 'Available for Opportunities?',
            type: 'boolean',
            description: 'Controls the green dot on the homepage',
        },
        {
            name: 'tagline',
            title: 'Typing Taglines',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'The rotating text under your name (e.g., "Full Stack Developer")',
        },
        {
            name: 'heroBio',
            title: 'Hero Short Bio',
            type: 'text',
            description: 'The short paragraph on the homepage hero section',
        },
        {
            name: 'profilePhoto',
            title: 'Profile Photo (Hero)',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'aboutProfilePhoto',
            title: 'Profile Photo (About Page)',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'aboutCaption',
            title: 'Photo Caption (About Page)',
            type: 'string',
            description: 'e.g., 📸 Live footage of me debugging at 3 AM',
        },
        {
            name: 'aboutBio',
            title: 'About Page Bio Paragraphs',
            type: 'array',
            of: [{ type: 'text' }],
            description: 'The longer bio paragraphs on the About page',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'e.g., Delhi, India',
        },
        {
            name: 'stats',
            title: 'Homepage Stats',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'value', title: 'Value', type: 'string', description: 'e.g., 4+' },
                    { name: 'label', title: 'Label', type: 'string', description: 'e.g., Projects Shipped' },
                ]
            }],
        },
        {
            name: 'email',
            title: 'Email Address',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        },
        {
            name: 'githubUrl',
            title: 'GitHub URL',
            type: 'url',
        },
        {
            name: 'linkedinUrl',
            title: 'LinkedIn URL',
            type: 'url',
        },
        {
            name: 'twitterUrl',
            title: 'Twitter / X URL',
            type: 'url',
        },
        {
            name: 'resumeUrl',
            title: 'Resume / CV URL',
            type: 'url',
            description: 'Public link to your resume (Google Drive, etc.)',
        },
    ]
}
