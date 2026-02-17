<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Juan Without Borders - Copilot Instructions

This is a Next.js (App Router) static site for "Juan Without Borders" - an inclusive employment platform connecting people with disabilities to corporate employers.

## Tech Stack
- **Framework:** Next.js 14 with App Router and static export (`output: 'export'`)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with dark mode support (class strategy)
- **Deployment:** Cloudflare Pages (static output to `out/` directory)

## Key Principles
- **Accessibility First:** All components must be WCAG 2.1 AA compliant
- **Semantic HTML:** Use proper heading hierarchy, landmarks, and ARIA attributes
- **Keyboard Navigation:** All interactive elements must be keyboard accessible
- **Screen Reader Support:** Use appropriate aria-labels, roles, and live regions
- **Reduced Motion:** Respect `prefers-reduced-motion` media query
- **High Contrast:** Support Windows High Contrast mode via `forced-colors`
- **Dark Mode:** All components must work in both light and dark modes
- **No Server-Side APIs:** This is a static site — no server components that need runtime

## Image Naming Convention
Images are stored in `public/images/` and named `image_0.png` through `image_7.png`.
