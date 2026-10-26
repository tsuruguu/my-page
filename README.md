# my-page

Personal portfolio — Astro + TypeScript, hosted on GitHub Pages: https://tsuruguu.github.io/my-page

```bash
npm install
npm run dev     # http://localhost:4321/my-page
npm run build
```

All content lives in `src/data/site.ts`. Push to `main` deploys automatically.

## Custom domain
1. Add the domain in Settings → Pages → Custom domain (and a CNAME/A record at your registrar).
2. Set repo variables `SITE_URL=https://yourdomain` and `BASE_PATH=/`.
