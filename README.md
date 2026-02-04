# Ashutosh Bhagwat - Portfolio Website

**Live**: [ashutoshbhagwat.tech](https://ashutoshbhagwat.tech)

Senior AI Engineer portfolio showcasing 4.7+ years of experience building production-grade Computer Vision systems across 13,000+ edge devices.

## Tech Stack
- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- React Router (SPA with GitHub Pages support)

## Quick Start
```bash
npm install    # Install dependencies
npm run dev    # Start dev server (localhost:5173)
npm run build  # Production build → dist/
npm run deploy # Deploy to GitHub Pages
```

## Directory Structure
```
src/
├── pages/           # Route pages
│   ├── Home.tsx         # Landing page with hero & stats
│   ├── Experience.tsx   # Work history & journey timeline
│   ├── Projects.tsx     # Project gallery
│   ├── ProjectDetail.tsx # Individual project (password-protected deep dives)
│   ├── Education.tsx    # Academic background
│   ├── Achievements.tsx # Awards, certifications, skills
│   ├── Contact.tsx      # Contact information
│   └── Resume.tsx       # Web resume with PDF download
├── components/      # Reusable UI components
├── data/            # Static data (projects, education)
├── lib/             # Utilities (auth, page titles)
├── hooks/           # Custom React hooks
└── index.css        # Global styles & theme (warm orange)
public/
├── 404.html         # SPA routing for GitHub Pages
├── CNAME            # Custom domain config
└── resume/          # PDF resume
```

## Key Features
- **SPA Routing**: Works with direct links on GitHub Pages
- **Password Protection**: Project deep dives require authentication
- **Responsive**: Mobile-first design
- **Theme**: Claude-inspired warm orange palette (light/dark modes)

## Deployment
Deploys to `gh-pages` branch via `npm run deploy`. Custom domain configured in `public/CNAME`.
