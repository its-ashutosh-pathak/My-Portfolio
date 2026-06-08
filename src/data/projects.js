
const projects = [
    {
        title: 'Pulse',
        date: 'Feb 2026 - Jun 2026',
        icon: 'fas fa-music',
        summary: 'Designed and developed Pulse, an ad-free, privacy-focused music streaming application built to deliver a seamless and modern listening experience without subscriptions or unnecessary complexity.',
        bulletPoints: [
            'Cross-Platform Architecture: Engineered entirely from the ground up using Flutter to deliver a unified, high-performance mobile experience.',
            'Advanced Audio Integration: Integrated background audio services to ensure seamless, continuous playback and native lock-screen media controls.',
            'State Management: Leveraged Riverpod to implement a scalable, clean, and robust state management architecture.',
            'Core Functionality: Developed high-demand features including unlimited streaming, intuitive playlist management, and offline downloads for on-the-go listening.',
            'End-to-End Delivery: Managed the entire product lifecycle from initial concept to public release, sharpening expertise in UI/UX design, performance optimization, and product delivery.'
        ],
        githubLink: 'https://github.com/its-ashutosh-pathak/Pulse',
        techStack: ['Flutter', 'Dart', 'Firebase'],
    },
    {
        title: 'My Portfolio Website',
        date: 'Feb 2026 - Present',
        icon: 'fas fa-globe',
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
        techStack: ['React.js', 'Vite', 'CSS3', 'React Router', 'JavaScript', 'Vercel'],
    },
    {
        title: 'Bhagwati Logistics Website',
        date: 'Jan 2026 - Feb 2026',
        icon: 'fas fa-truck',
        summary: 'Designed and developed a responsive business website for a logistics company from scratch. Gathered business requirements and translated them into a functional website.',
        liveLink: 'https://bhagwatilogistics.in',
        bulletPoints: [
            'Implemented mobile-first responsive layout using Flexbox and Grid',
            'Added SEO optimizations including meta tags, sitemap.xml, robots.txt, and Schema.org JSON-LD',
            'Integrated contact form using Netlify (no backend)',
        ],
        techStack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Netlify', 'Search Engine Optimization (SEO)'],
    },
    {
        title: 'SuperSquare',
        date: 'Dec 2025 - Jan 2026',
        icon: 'fas fa-gamepad',
        summary: 'SuperSquare is a strategy-based multiplayer board game inspired by Ultimate Tic Tac Toe. The game expands the traditional 3×3 concept into a multi-layered grid, requiring players to think several moves ahead and plan both locally and globally.',
        descriptions: [
            'The objective is to win individual mini-boards while also controlling the larger board to achieve overall victory. This layered rule system introduces deeper strategy, logical planning, and more engaging gameplay than classic tic tac toe.',
            'I designed and developed SuperSquare to strengthen my understanding of game logic, state management, and interactive UI development while following a clean and modular code structure.',
        ],
        githubLink: 'https://github.com/its-ashutosh-pathak/SuperSquare',
        techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite', 'TypeScript', 'Express.js', 'Node.js', 'Socket.io', 'JSON Web Token (JWT)', 'Nodemailer', 'MongoDB', 'bcrypt', 'Capacitor', 'Android Studio', 'Axios'],
    },
];

export default projects;
