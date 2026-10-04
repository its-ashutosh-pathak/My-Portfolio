
const projects = [
    {
        title: 'Pulse',
        date: 'Feb 2026 – Jun 2026',
        icon: 'fas fa-music',
        img: '/images/pulse.png',
        field: 'Music Streaming App · Flutter',
        summary: 'Designed and developed Pulse, an ad-free, privacy-focused music streaming application built to deliver a seamless and modern listening experience without subscriptions or unnecessary complexity.',
        bulletPoints: [
            'Cross-Platform Architecture: Engineered entirely from the ground up using Flutter to deliver a unified, high-performance mobile experience.',
            'Advanced Audio Integration: Integrated background audio services to ensure seamless, continuous playback and native lock-screen media controls.',
            'State Management: Leveraged Riverpod to implement a scalable, clean, and robust state management architecture.',
            'Core Functionality: Developed high-demand features including unlimited streaming, intuitive playlist management, and offline downloads.',
            'End-to-End Delivery: Managed the entire product lifecycle from initial concept to public release.',
        ],
        githubLink: 'https://github.com/its-ashutosh-pathak/Pulse',
        techStack: ['Flutter', 'Dart', 'Firebase', 'Riverpod'],
    },
    {
        title: 'My Portfolio Website',
        date: 'Feb 2026 – Present',
        icon: 'fas fa-globe',
        img: '/images/portfolio.png',
        field: 'Web App · React + Vite',
        summary: 'Designed and developed a modern, responsive personal portfolio website to showcase my skills, projects, education, and experience. Built with a focus on clean design, smooth animations, and a great user experience across all devices.',
        descriptions: [
            'Features a dynamic starfield background animation, glassmorphism UI elements, and a fully responsive layout that adapts seamlessly to desktop and mobile screens.',
            'The portfolio serves as a central hub for potential employers, clients, and collaborators to explore my work and get in touch.',
        ],
        bulletPoints: [
            'Implemented dynamic project rendering from a shared data source for easy updates',
            'Added typing animation on the hero section for an engaging first impression',
            'Built reusable components with React Router for seamless page navigation',
            'Integrated contact form with direct email and social media links',
        ],
        githubLink: 'https://github.com/its-ashutosh-pathak/My-Portfolio',
        techStack: ['React.js', 'Vite', 'CSS3', 'React Router', 'JavaScript', 'Vercel'],
    },
    {
        title: 'Bhagwati Logistics',
        date: 'Jan 2026 – Feb 2026',
        icon: 'fas fa-truck',
        img: '/images/bhagwati-logistics.png',
        field: 'Business Website · HTML/CSS/JS',
        summary: 'Designed and developed a responsive business website for a logistics company from scratch. Gathered business requirements and translated them into a functional website.',
        liveLink: 'https://bhagwatilogistics.in',
        bulletPoints: [
            'Implemented mobile-first responsive layout using Flexbox and Grid',
            'Added SEO optimizations including meta tags, sitemap.xml, robots.txt, and Schema.org JSON-LD',
            'Integrated contact form using Netlify (no backend)',
        ],
        techStack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Netlify', 'SEO'],
    },
    {
        title: 'SuperSquare',
        date: 'Dec 2025 – Jan 2026',
        icon: 'fas fa-gamepad',
        img: '/images/supersquare.png',
        field: 'Multiplayer Strategy Game · React',
        summary: 'SuperSquare is a strategy-based multiplayer board game inspired by Ultimate Tic Tac Toe. The game expands the traditional 3×3 concept into a multi-layered grid, requiring players to think several moves ahead.',
        descriptions: [
            'The objective is to win individual mini-boards while also controlling the larger board. This layered rule system introduces deeper strategy, logical planning, and more engaging gameplay.',
            'I designed and developed SuperSquare to strengthen my understanding of game logic, state management, and interactive UI development.',
        ],
        githubLink: 'https://github.com/its-ashutosh-pathak/SuperSquare',
        techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Express.js', 'Node.js', 'Socket.io', 'JWT', 'MongoDB', 'Capacitor'],
    },
];

export default projects;
