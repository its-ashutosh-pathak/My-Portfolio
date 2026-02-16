# Ashutosh Pathak — Portfolio

A modern, responsive personal portfolio built with React and Vite, featuring a dynamic starfield background, glassmorphism UI, and smooth animations.

## Live

Hosted on Vercel — [itsashutoshpathak.vercel.app](https://itsashutoshpathak.vercel.app)

## Tech Stack

- **React 19** + **React Router 7** — SPA with client-side routing
- **Vite 7** — Build tool and dev server
- **CSS3** — Custom styling with glassmorphism, gradients, and animations
- **FormSubmit** — Contact form backend (no server needed)
- **Vercel** — Hosting and deployment

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section with typing animation, featured projects |
| About | `/about` | Bio, skills, experience, and education |
| Projects | `/projects` | All projects with modal detail view |
| Contact | `/contact` | Contact form, social links, email, and WhatsApp |

## Features

- Dynamic starfield warp-drive background animation
- Project detail modals with React Portals
- Scroll-to-top on route changes
- Contact form via FormSubmit (email delivery)
- Fully responsive (mobile-first)
- SEO optimized (Open Graph, Twitter Cards, JSON-LD, sitemap)

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## SEO

- `sitemap.xml` and `robots.txt` in `/public`
- Open Graph and Twitter Card meta tags in `index.html`
- JSON-LD structured data (Person schema)

Update the domain in `index.html`, `sitemap.xml`, and `robots.txt` when connecting a custom domain.
