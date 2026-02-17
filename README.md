# Juan Without Borders 🌍

> Breaking Barriers, Building Futures — An inclusive employment platform connecting people with disabilities to forward-thinking corporate employers.

## ✨ Features

- **Inclusive Platform** — User accounts for Job Seekers, Companies, and Institutions
- **Job Posting & Application System** — Companies can post jobs, job seekers can apply
- **Dashboard Management** — Separate dashboards for recruiters and applicants
- **Email Verification** — Secure account verification system
- **Accessible Design** — WCAG 2.1 AA compliant, keyboard navigable, screen reader optimized
- **Dark / Light Mode** — System-aware theme switching with manual toggle
- **Responsive** — Beautiful on mobile, tablet, and desktop
- **Static Export** — Deployed on Cloudflare Pages for blazing-fast global delivery
- **Accessibility Widget** — Font size controls, high contrast mode, navigation tips

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- PostgreSQL database (local or hosted)

### Installation

```bash
npm install
```

### Database Setup

1. Set up a PostgreSQL database
2. Copy `.env.local` and fill in your database URL and other secrets
3. Run database migrations:
```bash
npx prisma migrate dev
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## 📧 Email Setup

The platform uses Resend for email verification. Sign up at [resend.com](https://resend.com) and add your API key to `.env.local`.

## 📸 Images

The site currently uses placeholder images from via.placeholder.com for demonstration purposes. To customize with your own images:

1. Replace the placeholder URLs in the component files with local image paths
2. Place your 8 images in `public/images/` with the following names:
   - `image_0.png` — Hero section (person working in accessible office)
   - `image_1.png` — Hero section (team collaboration)
   - `image_2.png` — Hero section (diversity event)
   - `image_3.png` — Hero section (career celebration)
   - `image_4.png` — Impact section (team working together)
   - `image_5.png` — Employers section (welcoming new team member)
   - `image_6.png` — Stories section (Sarah Mitchell)
   - `image_7.png` — Stories section (Marcus Johnson)

Or, update the `src` attributes in the components to point to your hosted images.

## ☁️ Deploying to Cloudflare Pages

### Via Dashboard
1. Push to GitHub
2. Go to Cloudflare Pages → Create Project → Connect to Git
3. Build command: `npm run build`
4. Build output: `out`

### Via CLI
```bash
npm run build
npx wrangler pages deploy out --project-name=juan-without-borders
```

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | React framework (App Router, static export) |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling with dark mode |
| Cloudflare Pages | Static hosting with global CDN |

## ♿ Accessibility

This project is built with accessibility as a core principle:

- **Semantic HTML** — Proper heading hierarchy, ARIA landmarks, roles
- **Keyboard Navigation** — All interactive elements are Tab-accessible
- **Screen Reader Support** — Descriptive aria-labels, live regions
- **Color Contrast** — Meets WCAG AA contrast ratios in all themes
- **Reduced Motion** — Animations disabled for `prefers-reduced-motion`
- **High Contrast** — Supports Windows High Contrast / `forced-colors`
- **Skip Links** — "Skip to main content" link for keyboard users
- **Focus Indicators** — Visible focus outlines on all interactive elements

## 📄 License

MIT
