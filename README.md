# Aditya Narayanan S — Portfolio Website

A modern, responsive single-page portfolio showcasing the work, skills, and certifications of Aditya Narayanan S, a CCNA-certified Network Engineer specializing in enterprise networking, cloud infrastructure, and network automation.

## Live Preview

The dev server runs automatically. For a production preview, build the project and serve the `dist/` folder.

## Tech Stack

- **NextJS** — UI library
- **TypeScript** — type-safe development
- **Tailwind CSS 3** — utility-first styling and responsive design
- **lucide-react** — icon library

## Features

- **Responsive Design** — Optimized for mobile, tablet, and desktop viewports
- **Smooth Scrolling Navigation** — Sticky navbar with scroll-aware styling and a mobile menu
- **Animated Hero Section** — Grid-pattern background, radial glow, and call-to-action buttons
- **About Section** — Professional summary with highlight trait cards
- **Skills Showcase** — Six categorized skill cards with color-coded badges
- **Experience Timeline** — TCS role details with impact metrics and achievement bullets
- **Projects Gallery** — Detailed project cards with tech tags and highlights
- **Certifications Grid** — All five industry certifications displayed as interactive cards
- **Education Section** — Academic background with CGPA highlights
- **Contact Form** — Working contact form that opens the user's email client, plus direct contact links
- **Subtle Animations** — Fade-in transitions, hover effects, and micro-interactions throughout

## Sections

| Section | Description |
|---------|-------------|
| Hero | Name, title, contact quick-links, and CTA buttons |
| About | Professional summary and key traits |
| Skills | Networking, Security, Wireless, Automation, Cloud, Programming |
| Experience | Network Engineer (L2) at Tata Consultancy Services |
| Projects | Network Automation & Routing Lab |
| Certifications | CCNA, AZ-700, Google Cybersecurity, Fortinet FCA & FNF |
| Education | B.E. Electronics and Communication Engineering |
| Contact | Contact form and direct contact channels |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

The dev server starts automatically in the Bolt environment. To run manually:

```bash
npm run dev
```

### Build

```bash
npm run build
```

The production build is output to the `dist/` directory.

### Type Check

```bash
npm run typecheck
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── App.tsx                 # Root component — assembles all sections
├── main.tsx                # App entry point
├── index.css               # Global styles, animations, scrollbar
└── components/
    ├── Navbar.tsx          # Sticky navigation with mobile menu
    ├── Hero.tsx            # Landing section with contact links
    ├── About.tsx           # Professional summary and traits
    ├── Skills.tsx          # Skills grid + shared SectionHeader
    ├── Experience.tsx      # Work experience with impact stats
    ├── Projects.tsx        # Project showcase card
    ├── Certifications.tsx  # Certification cards
    ├── Education.tsx       # Academic background
    ├── Contact.tsx         # Contact form and info
    └── Footer.tsx          # Footer with copyright
```

## Customization

All content is defined as static data arrays within each component. To update content (name, contact info, skills, experience bullets, certifications, etc.), edit the relevant component file in `src/components/`.

## License

© Aditya Narayanan S. All rights reserved.
