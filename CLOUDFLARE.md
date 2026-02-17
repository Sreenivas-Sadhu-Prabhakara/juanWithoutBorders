# Juan Without Borders - Cloudflare Pages

## Deployment

This project is configured for deployment to Cloudflare Pages.

### Quick Deploy

1. Push this repository to GitHub
2. Go to Cloudflare Pages Dashboard
3. Click "Create a project" → "Connect to Git"
4. Select this repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node.js version:** `18`

### Manual Deploy via Wrangler

```bash
npm run build
npx wrangler pages deploy out --project-name=juan-without-borders
```
