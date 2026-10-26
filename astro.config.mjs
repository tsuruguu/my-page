// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages pod tsuruguu.github.io/my-page. Po podpięciu własnej domeny:
// ustaw SITE na https://twojadomena i BASE na '/' (albo zmienne SITE_URL / BASE_PATH w workflow).
const SITE = process.env.SITE_URL || 'https://tsuruguu.github.io';
const BASE = process.env.BASE_PATH || '/my-page';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  compressHTML: true,
  integrations: [sitemap()],
});
