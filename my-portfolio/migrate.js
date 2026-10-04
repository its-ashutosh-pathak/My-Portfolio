import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = createClient({
    projectId: '9dyzkm9i',
    dataset: 'production',
    token: 'skDlw7zzr22YDbKqOk4YnCxIqY9IDJnjBOGnJ5d1T6jfhtEjVp385sOjmmu2wUZ3yKQRVY2xf2aEG7RtkOD3Igm9ikoXKRz0xDsaW8mFhI4LsB703NPVwc6CIaDWb2TVu7cVCUzUms0tNqjyAZ2NxL8NaXWzSPDCqAr3GJFRZooyIONOM26u',
    apiVersion: '2023-05-03',
    useCdn: false,
});

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

// Upload an image file and return the Sanity asset reference
async function uploadImage(filename) {
    const filePath = path.join(IMAGES_DIR, filename);
    if (!fs.existsSync(filePath)) {
        console.warn(`  ⚠️  Image not found: ${filename}`);
        return null;
    }
    const fileStream = fs.createReadStream(filePath);
    const ext = path.extname(filename).slice(1).replace('jpg', 'jpeg');
    const asset = await client.assets.upload('image', fileStream, {
        filename,
        contentType: `image/${ext}`,
    });
    console.log(`  ✅ Uploaded image: ${filename}`);
    return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

async function migrate() {
    console.log('\n🚀 Starting migration...\n');

    // ─────────────────────────────────────────────
    // 1. SITE SETTINGS
    // ─────────────────────────────────────────────
    console.log('📝 Migrating Site Settings...');
    const profilePhoto = await uploadImage('profile.jpg');
    const aboutProfilePhoto = await uploadImage('profile-dp.jpeg');

    await client.createOrReplace({
        _id: 'siteSettings',
        _type: 'siteSettings',
        name: 'Ashutosh Pathak',
        availableForWork: true,
        tagline: [
            'Full Stack Developer',
            'AI/ML Engineering Student',
            'Creative Technologist',
            'Open Source Enthusiast',
        ],
        heroBio: "B.Tech CSE student specializing in AI & ML — building full-stack apps, intelligent systems, and the occasional thing that refuses to cooperate until 2 AM. Powered by curiosity and black coffee.",
        profilePhoto,
        aboutProfilePhoto,
        aboutCaption: "📸 Live footage of me debugging production at 3 AM",
        aboutBio: [
            "I'm a B.Tech CSE student specializing in AI & ML — building full-stack applications, intelligent systems, and the occasional project that refuses to cooperate until 3 AM. I'm driven by curiosity, logic, and an occasional refusal to accept \"that's just how it works.\"",
            "I continuously explore new tools and development practices to improve my technical skills and refine how I approach problem-solving. Every project is an opportunity to learn something new, optimize something inefficient, or rebuild it properly when necessary.",
            "Beyond code, I sketch to visualize ideas, read to gain perspective, and play strategy games that taught me one thing: panic is inefficient, patience wins. That mindset carries directly into development.",
            "I also maintain a highly reliable partnership with black coffee — directly responsible for surviving late-night debugging sessions. At this point it's less of a beverage and more of a core system dependency.",
        ],
        location: 'Delhi, India',
        stats: [
            { value: '4+', label: 'Projects Shipped' },
            { value: '1', label: 'Freelance Client' },
            { value: '10+', label: 'Technologies' },
        ],
        email: 'ashutoshpathak.work@gmail.com',
        githubUrl: 'https://github.com/its-ashutosh-pathak',
        linkedinUrl: 'https://linkedin.com/in/its-ashutosh-pathak',
    });
    console.log('  ✅ Site Settings migrated\n');

    // ─────────────────────────────────────────────
    // 2. SKILL CATEGORIES
    // ─────────────────────────────────────────────
    console.log('🛠️  Migrating Skill Categories...');
    const skillsData = [
        { title: 'Programming Languages', icon: 'fas fa-code', img: 'skill_programming_1791110443542.jpg', tags: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C'], order: 1 },
        { title: 'Frontend Development', icon: 'fas fa-laptop-code', img: 'skill_frontend_1791110456294.jpg', tags: ['HTML5', 'CSS3', 'React', 'Vanilla JS', 'Tailwind CSS', 'Framer Motion', 'Vite'], order: 2 },
        { title: 'Backend Development', icon: 'fas fa-server', img: 'skill_backend_1791110467660.jpg', tags: ['Node.js', 'Express.js', 'Socket.io', 'JWT', 'Nodemailer', 'bcrypt'], order: 3 },
        { title: 'Databases', icon: 'fas fa-database', img: 'skill_databases_1791110479076.jpg', tags: ['MongoDB', 'Firebase'], order: 4 },
        { title: 'Mobile Development', icon: 'fas fa-mobile-alt', img: 'skill_mobile_1791110497528.jpg', tags: ['Flutter', 'Dart', 'Capacitor', 'Android Studio'], order: 5 },
        { title: 'Tools & DevOps', icon: 'fas fa-tools', img: 'skill_devops_1791110508492.jpg', tags: ['Git', 'GitHub', 'VS Code', 'Netlify', 'Vercel', 'Render', 'SEO'], order: 6 },
    ];

    for (const skill of skillsData) {
        const coverImage = await uploadImage(skill.img);
        await client.create({
            _type: 'skillCategory',
            title: skill.title,
            icon: skill.icon,
            coverImage,
            tags: skill.tags,
            order: skill.order,
        });
        console.log(`  ✅ Skill: ${skill.title}`);
    }
    console.log('');

    // ─────────────────────────────────────────────
    // 3. EDUCATION
    // ─────────────────────────────────────────────
    console.log('🎓 Migrating Education...');
    const educationData = [
        { period: 'Jun 2025 – Jun 2029', degree: 'B.Tech — Computer Science', field: 'Artificial Intelligence & Machine Learning', institution: 'KCC Institute of Technology & Management', img: 'kccitm.jpg', order: 1 },
        { period: 'Apr 2022 – Apr 2023', degree: '12th Grade', field: 'Senior Secondary Education', institution: 'Govt Boys Sr Sec School, Dharampura Najafgarh', img: 'gbsss-dharampura.png', order: 2 },
        { period: 'Apr 2020 – Apr 2021', degree: '10th Grade', field: 'Secondary Education', institution: 'G B S S Nangli Sakrawati, New Delhi', img: 'gbsss-nangli.png', order: 3 },
    ];

    for (const edu of educationData) {
        const coverImage = await uploadImage(edu.img);
        await client.create({
            _type: 'education',
            degree: edu.degree,
            field: edu.field,
            institution: edu.institution,
            period: edu.period,
            coverImage,
            order: edu.order,
        });
        console.log(`  ✅ Education: ${edu.degree}`);
    }
    console.log('');

    // ─────────────────────────────────────────────
    // 4. ACHIEVEMENTS
    // ─────────────────────────────────────────────
    console.log('🏆 Migrating Achievements...');
    const galleryFiles = ['codefarming-1.jpeg', 'codefarming-2.jpeg', 'codefarming-3.jpg', 'codefarming-4.jpg', 'codefarming-5.jpg', 'codefarming-6.png', 'codefarming-7.png'];
    const galleryAssets = [];
    for (const f of galleryFiles) {
        const asset = await uploadImage(f);
        if (asset) galleryAssets.push({ ...asset, _key: f.replace(/[^a-zA-Z0-9]/g, '_') });
    }

    await client.create({
        _type: 'achievement',
        title: '1st Place 🥇 — Code Farming 2026',
        organization: 'Voyager KCCITM, HackerRank & CodeChef',
        date: 'Apr 2026',
        icon: 'fas fa-trophy',
        color: '#FFD700',
        description: [
            'Proud to share that Team Mindmesh secured 1st place in an intense 24-hour codeathon. Coding continuously for 24 hours, competing in real-time with teams climbing up and down the leaderboard—it was absolutely brutal but rewarding.',
            'At one point in the night, my team and I genuinely questioned our life choices. Sleep felt like a luxury... and also like defeat 😅. The moment we paused, we could literally see ourselves slipping on the leaderboard. 24 hours of problem-solving, debugging, teamwork, pressure, and almost no sleep.',
            'A special thanks to the organizers, mentors, and Mr. Ashish Raj sir, whose passion for teaching coding constantly inspired and pushed us to perform better throughout this journey.',
        ],
        learnings: [
            'Consistency beats short bursts of energy',
            'Team coordination matters more than individual skill',
            'Mental endurance is just as important as technical knowledge',
            'Sometimes, growth comes from pushing beyond what feels "reasonable"',
        ],
        team: 'Team Mindmesh: Ashutosh Pathak, Sruti Jha, Kishan Koushal',
        gallery: galleryAssets,
    });
    console.log('  ✅ Achievement: Code Farming 2026\n');

    // ─────────────────────────────────────────────
    // 5. PROJECTS
    // ─────────────────────────────────────────────
    console.log('💻 Migrating Projects...');
    const projectsData = [
        {
            title: 'Pulse',
            date: 'Feb 2026 – Jun 2026',
            icon: 'fas fa-music',
            img: 'pulse.png',
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
            img: 'portfolio.png',
            field: 'Web App · React + Vite',
            summary: 'Designed and developed a modern, responsive personal portfolio website to showcase my skills, projects, education, and experience.',
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
            img: 'bhagwati-logistics.png',
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
            img: 'supersquare.png',
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

    for (const proj of projectsData) {
        const img = await uploadImage(proj.img);
        await client.create({
            _type: 'project',
            title: proj.title,
            date: proj.date,
            icon: proj.icon,
            img,
            field: proj.field,
            summary: proj.summary,
            descriptions: proj.descriptions || [],
            bulletPoints: proj.bulletPoints || [],
            techStack: proj.techStack || [],
            liveLink: proj.liveLink || null,
            githubLink: proj.githubLink || null,
        });
        console.log(`  ✅ Project: ${proj.title}`);
    }
    console.log('');

    console.log('🎉 Migration complete! All data is now in Sanity.\n');
}

migrate().catch((err) => {
    console.error('❌ Migration failed:', err);
    process.exit(1);
});
